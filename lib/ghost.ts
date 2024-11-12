import GhostContentAPI from "@tryghost/content-api";
import { ServerEnvironmentVariables } from "./env";

export function createGhostApiClient() {
  const [ghostContentApiKey, gcakError] = ServerEnvironmentVariables.GHOST_CONTENT_API_KEY;
  if (gcakError) throw new Error("Missing Ghost API Key");
  const [ghostUrl, guError] = ServerEnvironmentVariables.GHOST_URL;
  if (guError) throw new Error("Missing Ghost URL");

  // Create API instance with site credentials
  const api = new GhostContentAPI({
    url: ghostUrl,
    key: ghostContentApiKey,
    version: "v5.0",
  });

  return api;
}
