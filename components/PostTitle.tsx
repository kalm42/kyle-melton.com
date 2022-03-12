import React from "react";

interface PostTitleProps {
  children: React.ReactNode;
}

const PostTitle = (props: PostTitleProps) => {
  const { children } = props;

  return (
    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  );
};

export default PostTitle;
