import { createContext } from "../context";
import { z } from "zod";
import { procedure, router, createCallerFactory, mergeRouters } from "../trpc";
import { postsRouter } from "./posts";
import { createServerSideHelpers } from "@trpc/react-query/server";
import SuperJSON from "superjson";

const initialRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});

export const appRouter = mergeRouters(initialRouter, postsRouter);
export const createCaller = createCallerFactory(appRouter);
export const createAsyncCaller = async () => {
  const context = await createContext();
  return createCaller(context);
};
export const helpers = createServerSideHelpers({
  router: appRouter,
  ctx: await createContext(),
  transformer: SuperJSON, // optional - adds superjson serialization
});

// export type definition of API
export type AppRouter = typeof appRouter;
