import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const POSTS_DIRECTORY = join(process.cwd(), "content/blog");

export function getPostSlugs() {
  return fs.readdirSync(POSTS_DIRECTORY);
}

interface Items {
  [key: string]: any; // TODO: Better type this
}
export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(POSTS_DIRECTORY, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  console.log({ date: data["date"] });
  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === "date") {
      items[field] = data[field] + "";
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts: Items[] = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
  return posts;
}
