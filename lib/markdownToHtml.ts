import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHTML(markdown: string) {
  let result;
  try {
    result = await remark().use(html).process(markdown);
  } catch (error) {
    // TODO: report error
    console.error(error);
    return "";
  }
  return result.toString();
}
