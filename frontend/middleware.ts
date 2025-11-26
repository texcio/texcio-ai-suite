import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: [
    "/",
    "/login",
    "/register",
    "/forgot-password",
  ],

  afterAuth(auth, req) {
    // Redirect logged-in users away from auth pages
    if (
      auth.userId &&
      ["/login", "/register", "/forgot-password"].includes(
        req.nextUrl.pathname
      )
    ) {
      return Response.redirect(new URL("/dashboard", req.url));
    }
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
};
