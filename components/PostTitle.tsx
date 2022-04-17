import React from "react";
import H1 from "./base/H1";

interface PostTitleProps {
  children: string;
}

const PostTitle = (props: PostTitleProps) => {
  const { children } = props;

  return <h1>{children}</h1>;
};

export default PostTitle;
