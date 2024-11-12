import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { AppRouter, createAsyncCaller } from "@/server/routers";
import superjson from "superjson";
import { createTRPCReact } from "@trpc/react-query";
import { getBaseUrl } from "./getBaseUrl";
import { createServerSideHelpers } from "@trpc/react-query/server";

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
  ssr: false,
});

export const react_trpc = createTRPCReact<AppRouter>();
