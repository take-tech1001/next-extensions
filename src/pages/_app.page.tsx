import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { memo } from "react";

const App = (props: AppProps) => {
  return (
    <>
      <Head>
        <title>next chrome extensions</title>
      </Head>
    </>
  );
};

export default memo(App);
