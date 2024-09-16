import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

type Role = keyof typeof RoleBasedRoutes;

const AuthRoutes = ["/login", "/register"];

const RoleBasedRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = {
    name: "Sourave halder",
    token: "24320487dlfjl423421111",
    role: "ADMIN",
  };

  // const user = undefined;

  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (user?.role && RoleBasedRoutes[user?.role as Role]) {
    const routes = RoleBasedRoutes[user?.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/profile", "/admin", "/login", "/register"],
};
