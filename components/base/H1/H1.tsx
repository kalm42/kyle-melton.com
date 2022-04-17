import React from "react";
import cn from "classnames";

interface H1Props {
  children: React.ReactNode;
}

const H1 = (props: H1Props) => {
  const { children } = props;
  return <h1>{children}</h1>;
};

export default H1;
