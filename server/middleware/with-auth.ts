// import { TRPCError } from "@trpc/server";
import { middleware } from "../trpc";

export const withAuth = middleware(async (opts) => {
  const { ctx, next } = opts;
  // if (!ctx.session) {
  //   throw new TRPCError({ code: "UNAUTHORIZED" });
  // }

  return next({
    ctx: {},
  });
});
