import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const POSTS_DIRECTORY = join(process.cwd(), "content/blog");

export function getPostSlugs() {
  const slugs = fs.readdirSync(POSTS_DIRECTORY);
  return slugs;
}

export interface BlogPost {
  [key: string]: any; // TODO: Better type this
  templateKey: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string; // uri
  thumbnailAlt: string;
  date: string;
  slug: string;
}
export interface Items {
  data: BlogPost; // TODO: Better type this
  content: string;
}
export function getPostBySlug(slug: string, fields: string[] = []) {
  const webSlug = slug.replace(/\.md$/, "");
  const partialPath = slug.match(/\.md$/)?.length ? slug : `${slug}.md`;
  const fullPath = join(POSTS_DIRECTORY, partialPath);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const items = fields.reduce((acc, field) => {
    if (typeof data[field] !== "undefined") {
      switch (field) {
        case "slug":
          acc["slug"] = webSlug;
          break;
        case "date":
          acc["date"] = data[field].toISOString();
          break;
        default:
          acc[field] = data[field];
          break;
      }
    }
    return acc;
  }, {} as BlogPost);

  return { data: items, content };
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts: Items[] = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((postA, postB) => (postA.data.date > postB.data.date ? -1 : 1));
  return posts;
}

export function getLast3Posts() {
  const posts = getAllPosts(["title", "date", "slug", "description", "tags", "thumbnail", "thumbnailAlt"]);

  return posts
    .sort((a, b) => {
      const A = new Date(a.data.date);
      const B = new Date(b.data.date);
      return B.getTime() - A.getTime();
    })
    .slice(0, 3);
}
