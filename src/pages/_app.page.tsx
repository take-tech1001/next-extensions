import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { memo } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default memo(MyApp)
