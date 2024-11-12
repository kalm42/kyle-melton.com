import { createGhostApiClient } from "@/lib/ghost";
import { procedure, router } from "../trpc";
import { z } from "zod";

export const postsRouter = router({
  getAllPosts: procedure.query(() => {
    const ghost = createGhostApiClient();

    return ghost.posts.browse({
      limit: "all",
      include: ["authors", "tags"],
    });
  }),

  getPost: procedure.input(z.string()).query((opts) => {
    const ghost = createGhostApiClient();

    return ghost.posts.read({
      slug: opts.input,
    });
  }),

  getAuthor: procedure.input(z.string()).query((opts) => {
    const ghost = createGhostApiClient();

    return ghost.authors.read({
      slug: opts.input,
    });
  }),
});
