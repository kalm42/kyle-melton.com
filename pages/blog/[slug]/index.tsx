import { createGhostApiClient } from "@/lib/ghost";
import { PostOrPage } from "@tryghost/content-api";
import { GetServerSideProps } from "next";
// import { useRouter } from "next/router";
import React from "react";
import { z } from "zod";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ghost = createGhostApiClient();
  const slug = z.string().safeParse(context.params?.slug);
  if (!slug.success) return { notFound: true };

  const post = await ghost.posts.read({ slug: slug.data });
  if (!post) return { notFound: true };

  return { props: { post } };
};

interface BlogPostPageProps {
  post: PostOrPage;
}
const BlogPostPage = (props: BlogPostPageProps) => {
  const { post } = props;
  // const router = useRouter();
  return (
    <div>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
};

export default BlogPostPage;
