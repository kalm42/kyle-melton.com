import React from "react";

interface LayoutProps {
  preview: boolean;
  children: React.ReactNode;
}
const Layout = (props: LayoutProps) => {
  const { preview, children } = props;
  return (
    <div className="dark:bg-zinc-900 dark:text-slate-300 pt-5">
      <div className="min-h-screen">
        <main className={preview ? " border border-red" : ""}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
