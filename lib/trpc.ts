import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { AppRouter } from "@/server/routers";
import superjson from "superjson";
import { createTRPCReact } from "@trpc/react-query";
import { getBaseUrl } from "./getBaseUrl";

export const trpc = createTRPCNext<AppRouter>({
  config(opts) {
    const { ctx } = opts;
    if (typeof window !== "undefined") {
      return {
        transformer: superjson,
        links: [httpBatchLink({ url: "/api" })],
      };
    }

    return {
      transformer: superjson,
      links: [
        httpBatchLink({
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @see https://trpc.io/docs/ssr
           **/
          url: `${getBaseUrl()}/api`,
          // You can pass any HTTP headers you wish here
          async headers() {
            if (!ctx?.req?.headers) {
              return {};
            }
            return {
              // authorization: getAuthCookie(),
              cookie: ctx.req.headers.cookie,
            };
          },
        }),
      ],
    };
  },
  /**
   * @see https://trpc.io/docs/ssr
   **/
  ssr: true,
  responseMeta(opts) {
    const { clientErrors } = opts;
    if (clientErrors.length) {
      // propagate first http error from API calls
      return {
        status: clientErrors[0].data?.httpStatus ?? 500,
      };
    }
    // cache full page for 1 year + revalidate once every second
    const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;
    return {
      "Cache-Control": `s-maxage=1, stale-while-revalidate=${ONE_YEAR_IN_SECONDS}`,
    };
  },
});

export const react_trpc = createTRPCReact<AppRouter>();
