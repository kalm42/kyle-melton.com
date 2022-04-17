import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import PostTeaser from "../../components/PostTeaser";
import PostTitle from "../../components/PostTitle";
import { getAllPosts, Items } from "../../lib/posts";

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "description", "tags", "thumbnail", "thumbnailAlt"]);
  const sorted = allPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  return {
    props: { posts: sorted },
  };
};

interface BlogIndexProps {
  posts: Items[];
  preview: boolean;
}

const BlogIndex = (props: BlogIndexProps) => {
  const { posts, preview } = props;
  const router = useRouter();
  return (
    <Layout preview={false}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Head>
              <title>Kyle&apos;s Blog</title>
            </Head>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols3 lg:grid-cols-4 gap-16">
              {posts.map((post) => (
                <PostTeaser post={post} key={post.data.slug} />
              ))}
            </section>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default BlogIndex;
