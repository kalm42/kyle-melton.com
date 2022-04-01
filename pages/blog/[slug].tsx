import { useRouter } from "next/router";
import Error from "next/error";
import React from "react";
import { GetStaticProps } from "next";
import { BlogPost, getAllPosts, getPostBySlug } from "../../lib/posts";
import markdownToHTML from "../../lib/markdownToHtml";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import PostTitle from "../../components/PostTitle";
import Head from "next/head";
import PostHeader from "../../components/PostHeader";
import PostBody from "../../components/PostBody";

export interface PostProps {
  post: BlogPost;
  content: string;
  preview: boolean;
}

const Post = (props: PostProps) => {
  const { post, preview, content } = props;
  const router = useRouter();

  // If there's no post show 404
  // if (!router.isFallback && !post.slug) {
  //   return <Error statusCode={404} />;
  // }

  return (
    <Layout preview={false}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title} | Kyle Melton</title>
                <meta property="og:image" content={post.thumbnail} />
              </Head>
              <PostHeader slug={post.slug} title={post.title} coverImage={post.thumbnail} date={post.date} />
              <PostBody content={content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async (context) => {
  let slug = context.params?.slug;

  if (!slug) {
    throw new Error({ title: "No slug provided", statusCode: 404 });
  }

  if (Array.isArray(slug)) {
    slug = slug[0];
  }

  const post = getPostBySlug(slug, ["title", "date", "slug", "description", "tags", "thumbnail", "thumbnailAlt"]);
  const content = await markdownToHTML(post.content || "");
  return { props: { post: post.data, content } };
};

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => ({ params: { slug: post.data.slug } })),
    fallback: false,
  };
}
