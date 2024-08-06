import { clerkMiddleware } from "@clerk/nextjs/server";

const publishableKey = 'pk_test_ZnJlZS1mb3gtMTMuY2xlcmsuYWNjb3VudHMuZGV2JA';

if (!publishableKey) {
  console.error("Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY environment variable")
}

export default clerkMiddleware({
  publishableKey
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};