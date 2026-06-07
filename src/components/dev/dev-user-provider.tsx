"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { createClient } from "@/lib/supabase/client";
import {
  DEV_MODE_COOKIE,
  getMockUserForRole,
  isAppRole,
  isDevModeEnabled,
  type AppRole,
} from "@/lib/auth/dev-mode";
import type { CurrentUser } from "@/lib/auth/types";

type UserContextValue = {
  user: CurrentUser | null;
  role: AppRole | null;
  isLoading: boolean;
  isDevMode: boolean;
  setDevRole: (role: AppRole | null) => void;
};

const UserContext = createContext<UserContextValue | null>(null);

function readCookie(name: string) {
  if (typeof document === "undefined") {
    return null;
  }

  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));

  return cookie ? decodeURIComponent(cookie.split("=")[1] ?? "") : null;
}

function writeDevRoleCookie(role: AppRole | null) {
  if (role) {
    document.cookie = `${DEV_MODE_COOKIE}=${encodeURIComponent(role)}; Path=/; Max-Age=2592000; SameSite=Lax`;
    return;
  }

  document.cookie = `${DEV_MODE_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
}

function roleFromMetadata(
  metadata: Record<string, unknown> | null | undefined,
): AppRole | null {
  const role = metadata?.role;
  return isAppRole(role) ? role : null;
}

async function loadBrowserUser(): Promise<CurrentUser | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  return data.user
    ? {
        id: data.user.id,
        email: data.user.email ?? null,
        role: roleFromMetadata(data.user.user_metadata),
        isDevUser: false,
      }
    : null;
}

export function DevUserProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const setDevRole = useCallback(
    (role: AppRole | null) => {
      if (!isDevModeEnabled) {
        return;
      }

      writeDevRoleCookie(role);

      if (role) {
        setUser(getMockUserForRole(role));
        router.refresh();
        return;
      }

      setIsLoading(true);
      loadBrowserUser().then((nextUser) => {
        setUser(nextUser);
        setIsLoading(false);
        router.refresh();
      });
    },
    [router],
  );

  useEffect(() => {
    let isMounted = true;

    async function loadUser() {
      if (isDevModeEnabled) {
        const devRole = readCookie(DEV_MODE_COOKIE);

        if (isAppRole(devRole)) {
          if (isMounted) {
            setUser(getMockUserForRole(devRole));
            setIsLoading(false);
          }
          return;
        }
      }

      const nextUser = await loadBrowserUser();

      if (isMounted) {
        setUser(nextUser);
        setIsLoading(false);
      }
    }

    loadUser();

    return () => {
      isMounted = false;
    };
  }, []);

  const value = useMemo<UserContextValue>(
    () => ({
      user,
      role: user?.role ?? null,
      isLoading,
      isDevMode: isDevModeEnabled,
      setDevRole,
    }),
    [isLoading, setDevRole, user],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used inside DevUserProvider.");
  }

  return context;
}
