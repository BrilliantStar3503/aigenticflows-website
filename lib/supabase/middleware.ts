import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { isSupabaseConfigured, supabaseEnv } from "@/lib/supabase/env";

const PROTECTED_PREFIXES = ["/dashboard", "/account"];

export async function updateSession(request: NextRequest) {
  const response = NextResponse.next({ request });

  if (!isSupabaseConfigured) {
    return response;
  }

  const supabase = createServerClient(supabaseEnv.url, supabaseEnv.anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isProtected = PROTECTED_PREFIXES.some((prefix) => request.nextUrl.pathname.startsWith(prefix));

  if (isProtected && !user) {
    const redirectUrl = new URL("/", request.url);
    redirectUrl.searchParams.set("authRedirect", request.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}
