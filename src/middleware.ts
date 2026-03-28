import { NextResponse } from "next/server";
import { auth } from "../auth";

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const { pathname } = req.nextUrl;

    const isApiAuthRoute = pathname.startsWith("/api/auth");
    const isAdminLoginRoute = pathname === "/admin-login";
    const isAdminRoute = pathname.startsWith("/admin");

    if (isApiAuthRoute) {
        return NextResponse.next();
    }

    if (isAdminLoginRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL("/admin/dashboard", req.nextUrl));
        }
        return NextResponse.next();
    }

    if (isAdminRoute && !isLoggedIn) {
        return NextResponse.redirect(new URL("/admin-login", req.nextUrl));
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        "/admin/:path*",
        "/admin-login",
        "/api/auth/:path*"
    ],
};
