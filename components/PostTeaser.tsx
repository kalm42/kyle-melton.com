import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Items } from "../lib/posts";
import H2 from "./base/H2";
import cn from "classnames";

interface PostTeaserProps {
  post: Items;
}

const PostTeaser = (props: PostTeaserProps) => {
  const { post } = props;
  const d = new Date(post.data.date);
  return (
    <article key={post.data.slug} className={cn("mb-32")}>
      <div className="max-w-screen-xl">
        <Image src={post.data.thumbnail} alt={post.data.thumbnailAlt} width={1200} height={675} layout="responsive" />
      </div>
      <h2>{post.data.title}</h2>
      <p className={cn("text-xs", "text-slate-700 p-0")}>
        I wrote this on {d.getMonth() + 1}/{d.getDate()}/{d.getFullYear()}
      </p>
      <p>{post.data.description}</p>
      <div className={cn("flex", "justify-end")}>
        <Link href={`/blog/${post.data.slug}`}>
          <a className={cn("hover:underline p-4")}>Read more</a>
        </Link>
      </div>
    </article>
  );
};

export default PostTeaser;
