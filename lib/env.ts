import { Result } from "@/types/shared-types";

export class ClientEnvironmentVariables {
  public static get NEXT_PUBLIC_POSTHOG_KEY(): Result<string> {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) {
      return [null, new Error("NEXT_PUBLIC_POSTHOG_KEY is not defined")];
    }
    return [key, null];
  }

  public static get NEXT_PUBLIC_POSTHOG_HOST(): Result<string> {
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
    if (!host) {
      return [null, new Error("NEXT_PUBLIC_POSTHOG_HOST is not defined")];
    }
    return [host, null];
  }

  public static get NEXT_PUBLIC_SENTRY_DSN(): Result<string> {
    const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
    if (!dsn) {
      return [null, new Error("NEXT_PUBLIC_SENTRY_DSN is not defined")];
    }
    return [dsn, null];
  }

  public static get NEXT_PUBLIC_ENVIRONMENT(): Result<string> {
    const env = process.env.NEXT_PUBLIC_ENVIRONMENT;
    if (!env) {
      return [null, new Error("NEXT_PUBLIC_ENVIRONMENT is not defined")];
    }
    return [env, null];
  }

  public static get NEXT_PUBLIC_APP_DOMAIN(): Result<string> {
    const domain = process.env.NEXT_PUBLIC_APP_DOMAIN;
    if (!domain) {
      return [null, new Error("NEXT_PUBLIC_APP_DOMAIN is not defined")];
    }
    return [domain, null];
  }

  public static get NEXT_PUBLIC_SENTRY_ORG(): Result<string> {
    const org = process.env.NEXT_PUBLIC_SENTRY_ORG;
    if (!org) {
      return [null, new Error("NEXT_PUBLIC_SENTRY_ORG is not defined")];
    }
    return [org, null];
  }

  public static get NEXT_PUBLIC_PROJECT_ID(): Result<string> {
    const id = process.env.NEXT_PUBLIC_PROJECT_ID;
    if (!id) {
      return [null, new Error("NEXT_PUBLIC_PROJECT_ID is not defined")];
    }
    return [id, null];
  }
}

export class ServerEnvironmentVariables {
  constructor() {
    if (typeof window !== "undefined") {
      throw new Error("ServerEnvironmentVariables is only available in the server");
    }
  }

  public static get SENTRY_AUTH_TOKEN(): Result<string> {
    const token = process.env.SENTRY_AUTH_TOKEN;
    if (!token) {
      return [null, new Error("SENTRY_AUTH_TOKEN is not defined")];
    }
    return [token, null];
  }

  public static get GHOST_URL(): Result<string> {
    const token = process.env.GHOST_URL;
    if (!token) {
      return [null, new Error("GHOST_URL is not defined")];
    }
    return [token, null];
  }

  public static get GHOST_CONTENT_API_KEY(): Result<string> {
    const token = process.env.GHOST_CONTENT_API_KEY;
    if (!token) {
      return [null, new Error("GHOST_CONTENT_API_KEY is not defined")];
    }
    return [token, null];
  }
}
