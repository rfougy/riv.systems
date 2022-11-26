import "../styles/globals.css";
import type { AppProps } from "next/app";
import DisplayDotsCoordsProvider from "../components/context/DisplayDotsCoordsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DisplayDotsCoordsProvider>
      <Component {...pageProps} />
    </DisplayDotsCoordsProvider>
  );
}

export default MyApp;
