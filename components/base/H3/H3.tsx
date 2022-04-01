import React from "react";
import cn from "classnames";

interface H3Props {
  children: React.ReactNode;
}

const H3 = (props: H3Props) => {
  const { children } = props;
  return (
    <h3
      className={cn(
        "text-4xl",
        "lg:text-5xl",
        "font-bold",
        "tracking-tighter",
        "leading-tight",
        "text-center",
        "lg:text-left",
        "mb-10",
        "lg:mb-0",
        "lg:pr-4",
        "lg:w-1/2",
      )}
    >
      {children}
    </h3>
  );
};

export default H3;
