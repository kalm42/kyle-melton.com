import { createContext } from "../context";
import { z } from "zod";
import { procedure, router, createCallerFactory } from "../trpc";

export const appRouter = router({
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
export const createCaller = createCallerFactory(appRouter);
export const createAsyncCaller = async () => {
  const context = await createContext();
  return createCaller(context);
};

// export type definition of API
export type AppRouter = typeof appRouter;
