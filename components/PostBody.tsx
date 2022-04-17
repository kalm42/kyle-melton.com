import React from "react";

interface PostBodyProps {
  content: string;
}

const PostBody = (props: PostBodyProps) => {
  const { content } = props;
  return (
    <div className="max-w-2xl mx-auto">
      <div className={""} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;
