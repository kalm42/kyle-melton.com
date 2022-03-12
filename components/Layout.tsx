import React from "react";
import Alert from "./Alert";
import Footer from "./Footer";
import Meta from "./Meta";

interface LayoutProps {
  preview: boolean;
  children: React.ReactNode;
}
const Layout = (props: LayoutProps) => {
  const { preview, children } = props;
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
