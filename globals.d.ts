/* eslint-disable @typescript-eslint/no-unused-vars */

namespace NodeJS {
  interface ProcessEnv {
    // Meta details
    NEXT_PUBLIC_ENVIRONMENT?: string;
    NEXT_PUBLIC_APP_DOMAIN?: string;
    // PostHog
    NEXT_PUBLIC_POSTHOG_KEY?: string;
    NEXT_PUBLIC_POSTHOG_HOST?: string;
    // Sentry
    NEXT_PUBLIC_SENTRY_DSN?: string;
    SENTRY_AUTH_TOKEN?: string;
    NEXT_PUBLIC_SENTRY_ORG?: string;
    NEXT_PUBLIC_PROJECT_ID?: string;
    // Ghost, TBD
  }
}
