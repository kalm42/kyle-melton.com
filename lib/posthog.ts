import posthog, { PostHog } from "posthog-js";
import { ClientEnvironmentVariables as env } from "./env";
import { Result } from "@/types/shared-types";

export default function createPostHogClient(): Result<PostHog> {
  if (typeof window === "undefined") {
    return [null, new Error("createPostHogClient is only available in the browser.")];
  }

  const [phKey, errorPhKey] = env.NEXT_PUBLIC_POSTHOG_KEY;
  const [phHost, errorPhHost] = env.NEXT_PUBLIC_POSTHOG_HOST;
  if (errorPhKey || errorPhHost) {
    throw errorPhKey || errorPhHost;
  }

  const phClient = posthog.init(phKey, {
    api_host: phHost,
    person_profiles: "always", // or 'always' to create profiles for anonymous users as well
  });
  if (!phClient) return [null, new Error("Failed to initialize PostHog client")];

  return [phClient, null];
}
