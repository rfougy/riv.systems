import "../styles/globals.css";
import type { AppProps } from "next/app";
import Search from "../components/search/Search/Search";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Search />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
