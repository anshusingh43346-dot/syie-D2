import { cookies } from "next/headers";

import {
  getMockUserForRole,
  isAppRole,
  isDevModeEnabled,
  DEV_MODE_COOKIE,
  type AppRole,
} from "@/lib/auth/dev-mode";
import { createClient } from "@/lib/supabase/server";
import type { CurrentUser } from "@/lib/auth/types";

function getRoleFromMetadata(
  metadata: Record<string, unknown> | null | undefined,
): AppRole | null {
  const role = metadata?.role;
  return isAppRole(role) ? role : null;
}

export async function getCurrentUser(): Promise<CurrentUser | null> {
  const cookieStore = await cookies();
  const devRole = cookieStore.get(DEV_MODE_COOKIE)?.value;

  if (isDevModeEnabled && isAppRole(devRole)) {
    return getMockUserForRole(devRole);
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return null;
  }

  return {
    id: data.user.id,
    email: data.user.email ?? null,
    role: getRoleFromMetadata(data.user.user_metadata),
    isDevUser: false,
  };
}
