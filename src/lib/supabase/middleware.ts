import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

import {
  DEV_MODE_COOKIE,
  isAppRole,
  isDevModeEnabled,
} from "@/lib/auth/dev-mode";

const protectedRoutePrefixes = ["/dashboard", "/admin", "/creator"];

function hasDevModeBypass(request: NextRequest) {
  const devRole = request.cookies.get(DEV_MODE_COOKIE)?.value;

  return isDevModeEnabled && isAppRole(devRole);
}

function isProtectedRoute(pathname: string) {
  return protectedRoutePrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function redirectToLogin(request: NextRequest) {
  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set(
    "next",
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
  );
  return NextResponse.redirect(loginUrl);
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });
  const isProtectedPath = isProtectedRoute(request.nextUrl.pathname);
  const canBypassProtectedRoutes = hasDevModeBypass(request);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return isProtectedPath && !canBypassProtectedRoutes
      ? redirectToLogin(request)
      : supabaseResponse;
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value),
        );
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options),
        );
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (isProtectedPath && !user && !canBypassProtectedRoutes) {
    return redirectToLogin(request);
  }

  return supabaseResponse;
}
