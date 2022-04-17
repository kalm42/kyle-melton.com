import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  return <div className="container mx-auto px-5">{props.children}</div>;
};

export default Container;
