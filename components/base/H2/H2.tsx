import React from "react";
import cn from "classnames";

interface H2Props {
  children: React.ReactNode;
}

const H2 = (props: H2Props) => {
  const { children } = props;
  return (
    <h2
      className={cn(
        "text-2xl",
        "md:text-4xl",
        "font-bold",
        "tracking-tight",
        "md:tracking-tighter",
        "leading-tight",
        "mb-20",
        "mt-8",
      )}
    >
      {children}
    </h2>
  );
};

export default H2;
