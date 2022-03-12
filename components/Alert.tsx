import classNames from "classnames";
import React from "react";
import Container from "./Container";
interface AlertProps {
  preview: boolean;
}
const Alert = (props: AlertProps) => {
  const { preview } = props;
  return (
    <div
      className={classNames("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a href="/api/exit-preview" className="underline hover:text-cyan duration-200 transition-colors">
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{" "}
              <a
                href={`https://github.com/kalm42/kyle-melton.com/tree/master/content/blog/`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
