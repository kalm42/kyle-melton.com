import { useRouter } from "next/router";
import Error from "next/error";
import React from "react";
import { GetStaticProps } from "next";
import { getAllPosts, getPostBySlug } from "../../lib/posts";
import markdownToHTML from "../../lib/markdownToHtml";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import PostTitle from "../../components/PostTitle";
import Head from "next/head";
import PostHeader from "../../components/PostHeader";
import PostBody from "../../components/PostBody";

export interface PostProps {
  post: any;
  preview: boolean;
}

const Post = (props: PostProps) => {
  const { post, preview } = props;
  const router = useRouter();

  // If there's no post show 404
  if (!router.isFallback && !post.slug) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title} | Kyle Melton</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader slug={post.slug} title={post.title} coverImage={post.coverImage} date={post.date} />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async (context) => {
  console.log({ context });
  let slug = context.params?.slug;

  if (!slug) {
    throw new Error({ title: "No slug provided", statusCode: 404 });
  }

  if (Array.isArray(slug)) {
    slug = slug[0];
  }

  const post = getPostBySlug(slug, ["title", "date", "slug", "description", "tags", "thumbnail", "thumbnailAlt"]);
  const content = await markdownToHTML(post.content || "");

  return { props: { post: { ...post, content } } };
};

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);
  console.log({ posts });

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}
