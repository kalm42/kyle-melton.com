// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { ClientEnvironmentVariables as e } from "./lib/env";
import createPostHogClient from "./lib/posthog";

const [dsn, errorDsn] = e.NEXT_PUBLIC_SENTRY_DSN;
if (errorDsn) throw errorDsn;

const [org, errorOrg] = e.NEXT_PUBLIC_SENTRY_ORG;
if (errorOrg) throw errorOrg;

const [projectId, errorProjectId] = e.NEXT_PUBLIC_PROJECT_ID;
if (errorProjectId) throw errorProjectId;

const [posthog, errorPostHog] = createPostHogClient();
if (errorPostHog) throw errorPostHog;

Sentry.init({
  dsn,

  integrations: [
    posthog.sentryIntegration({
      organization: org,
      projectId: Number(projectId),
      severityAllowList: ["error", "info"], // optional: here is set to handle captureMessage (info) and captureException (error)
    }),
  ],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
