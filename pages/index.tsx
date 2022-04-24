import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import cn from "classnames";
import Container from "../components/Container";
import { getLast3Posts, Items } from "../lib/posts";
import PostTeaser from "../components/PostTeaser";

interface HomeProps {
  posts: Items[];
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
        <Container>
          <h2>
            <Link href={"/"}>
              <a className="hover:underline">Home.</a>
            </Link>
          </h2>
          <h1>Kyle Front End Engineer.</h1>
          <div className="pb-20">
            <p className="pb-8">
              I love working with JavaScript, Node, GraphQL, Typescript, and React. The whole JAMStack is my ... jam. I
              have made express node REST api backends, GraphQL services. Headless WordPress sites with custom plugins
              and custom post types. For a while I wrote custom PHP software. I have a couple of Swift for iOS tutorials
              on YouTube. I just love learning and making cool stuff. If you&apos;re making cool stuff and want me to
              help then get in touch.
            </p>
            <p>
              I hate saying the standard things like &lsquo;I&lsquo;m a hard worker&rsquo;, and &lsquo;I follow through
              and follow up on projects&rsquo;. You can&lsquo;t know that from words alone, you can only know that from
              working with someone. People know that from working with me. I take pride in the code I deliver because
              that&lsquo;s who I am. I&lsquo;m not prideful about my code because ego kills growth and growth is what I
              want.
            </p>
          </div>
          <section>
            <h3 className="pb-16">Latest Blog Posts.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostTeaser post={post} key={post.data.slug} />
              ))}
            </div>
            <p>
              <Link href={"/blog"}>
                <a className={cn("border-2", "border-black", "p-4", "rounded", "hover:underline")}>See all posts.</a>
              </Link>
            </p>
          </section>
        </Container>
      </main>

      <footer className="container mx-auto">
        <Container>
          <div className="py-28 flex flex-col lg:flex-row items-center">
            <h3>Contact Me.</h3>
            <ul>
              <li>
                P: <a href="tel:+15414440699">541-444-0699</a>
              </li>
              <li>
                E: <a href="mailto:kyle@kyle-melton.com">kyle@kyle-melton.com</a>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = getLast3Posts();
  return { props: { posts } };
};

export default Home;
