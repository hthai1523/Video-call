import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoute = createRouteMatcher([
  '/',
  '/upcocming',
  '/previous',
  'recordings',
  '/personal-room',
  '/meeting(.*)',
])

import default clerkMiddleware()

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};