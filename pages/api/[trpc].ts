import { appRouter } from "@/server/routers";
import * as trpcNext from "@trpc/server/adapters/next";
// export API handler
// @link https://trpc.io/docs/server/adapters
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
