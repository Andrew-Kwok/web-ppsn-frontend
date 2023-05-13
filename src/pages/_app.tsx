import '@components/styles/globals.css'
import type { AppProps } from 'next/app'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

import Layout from "../components/Layout"

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>  
  );
}
