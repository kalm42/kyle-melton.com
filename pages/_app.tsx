import { trpc } from "@/lib/trpc";
import "../styles/globals.css";
import type { AppProps, AppType } from "next/app";

const MyApp: AppType = (props: AppProps) => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(MyApp);
