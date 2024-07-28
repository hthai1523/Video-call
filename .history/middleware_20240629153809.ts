import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoute = createRouteMatcher([
  '/',
  '/upcocming',
  '/previous',
  'recordings',
  '/personal-room',
  '/meeting(.*)',
])

export default clerkMiddleware((auth, req) => {
  if(protectedRoute(req))
})


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};