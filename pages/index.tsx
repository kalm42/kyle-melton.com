import type { GetStaticProps } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { posts: [] } };
};

const Home = () => {
  return (
    <div className="dark:bg-zinc-900 dark:text-slate-300 pt-5">
      <Head>
        <title>Kyle - Front End Engineer</title>
        <meta name="description" content="Kyle is a front end engineer who is a react subject matter expert." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Coming soon</h1>
      </main>
    </div>
  );
};

export default Home;
