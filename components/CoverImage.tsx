import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CoverImageProps {
  title: string;
  src: string;
  height: number;
  width: number;
  slug: string;
}

const TheImage = (props: CoverImageProps) => {
  const { title, src, slug, height, width } = props;
  return (
    <Image
      src={src}
      alt={`Cover image for ${title}`}
      height={height}
      width={width}
      loading="lazy"
      layout="responsive"
      className={classNames("shadow-sm", {
        "hover:shadow-md transition-shadow duration-200": slug,
      })}
    />
  );
};

const CoverImage = (props: CoverImageProps) => {
  const { title, slug } = props;

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>
            <TheImage {...props} />
          </a>
        </Link>
      ) : (
        <TheImage {...props} />
      )}
    </div>
  );
};

export default CoverImage;
