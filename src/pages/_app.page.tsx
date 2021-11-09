import type { AppProps } from 'next/app'
import "tailwindcss/tailwind.css";
import { memo } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default memo(MyApp)
