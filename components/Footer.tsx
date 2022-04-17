import { useRouter } from "next/router";
import React from "react";
import Container from "./Container";

const Footer = () => {
  const router = useRouter();
  let github = "";

  switch (router.route) {
    case "/blog":
      github = "pages/blog/index.tsx";
      break;
    case "/blog/[slug]":
      github = encodeURIComponent(`content/blog/${router.query.slug}.md`);
    default:
      break;
  }

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3>Did you find an error?</h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`https://github.com/kalm42/kyle-melton.com/tree/main/${github}`}
              className="mx-3 font-bold hover:underline"
            >
              Edit on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
