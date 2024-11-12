import { createGhostApiClient } from "@/lib/ghost";
import { helpers } from "@/server/routers";
import { PostsOrPages } from "@tryghost/content-api";
import type { GetServerSideProps } from "next";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ghost = createGhostApiClient();
  const posts = await ghost.posts.browse({ limit: "all" });

  return { props: { posts } };
};

interface HomeProps {
  posts: PostsOrPages;
}

const Home = (props: HomeProps) => {
  const { posts } = props;
  return (
    <div className="dark:bg-zinc-900 dark:text-slate-300 pt-5">
      <Head>
        <title>Kyle - Front End Engineer</title>
        <meta name="description" content="Kyle is a front end engineer who is a react subject matter expert." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Coming soon</h1>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </main>
    </div>
  );
};

export default Home;
