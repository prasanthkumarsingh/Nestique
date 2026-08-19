import { NextResponse, type NextRequest } from "next/server";
import { getSessionUser } from "@/lib/supabase/middleware";

// Deliberately using the legacy "middleware.ts" (Edge-only) convention rather
// than Next.js 16's "proxy.ts" — proxy.ts is hard-locked to the Node.js
// runtime, which OpenNext's Cloudflare adapter does not yet support
// ("Node.js middleware is not currently supported"). middleware.ts still
// runs on the Edge runtime and is what Cloudflare deploys can build.
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { supabase, supabaseResponse, user } = await getSessionUser(request);

  if (pathname.startsWith("/admin")) {
    const isLoginPage = pathname === "/admin/login";

    const isAdmin = user
      ? !!(await supabase.from("admins").select("id").eq("email", user.email!).maybeSingle()).data
      : false;

    if (isLoginPage) {
      if (isAdmin) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
      return supabaseResponse;
    }

    if (!isAdmin) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    return supabaseResponse;
  }

  if (pathname.startsWith("/client")) {
    const isLoginPage = pathname === "/client/login";

    const isClient = user
      ? !!(
          await supabase
            .from("clients")
            .select("id")
            .eq("email", user.email!)
            .eq("approved", true)
            .maybeSingle()
        ).data
      : false;

    if (isLoginPage) {
      if (isClient) {
        return NextResponse.redirect(new URL("/client", request.url));
      }
      return supabaseResponse;
    }

    if (!isClient) {
      return NextResponse.redirect(new URL("/client/login", request.url));
    }

    return supabaseResponse;
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/admin/:path*", "/client/:path*"],
};
