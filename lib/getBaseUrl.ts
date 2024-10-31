import { ClientEnvironmentVariables as e } from "./env";

export function getBaseUrl() {
  const [NEXT_PUBLIC_APP_DOMAIN, errorNPAD] = e.NEXT_PUBLIC_APP_DOMAIN;
  if (errorNPAD) throw errorNPAD;
  if (typeof window !== "undefined") {
    // browser should use relative path
    return "";
  }

  const protocol = NEXT_PUBLIC_APP_DOMAIN.includes("localhost") ? "http" : "https";

  const url = new URL(`${protocol}://${NEXT_PUBLIC_APP_DOMAIN}`);

  // assume localhost
  return url.toString();
}
