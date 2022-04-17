import React from "react";
import CoverImage from "./CoverImage";
import DateFormatter from "./DateFormatter";
import PostTitle from "./PostTitle";

interface PostHeaderProps {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
}

const PostHeader = (props: PostHeaderProps) => {
  const { title, coverImage, date, slug } = props;
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} slug={slug} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
