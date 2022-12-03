import "../styles/globals.css";
import type { AppProps } from "next/app";
import DisplayDotsCoordsProvider from "../components/context/DisplayDotsCoordsContext";
import Navbar from "../components/navbar/Navbar";
import { getFileNamesInDirectory } from "../lib/cms/getCmsContent";

const MyApp = (props: any) => {
  const { Component, pageProps }: AppProps = props;

  return (
    <>
      <DisplayDotsCoordsProvider>
        <Navbar sections={props.sections} />
        <Component {...pageProps} />
      </DisplayDotsCoordsProvider>
    </>
  );
};

export default MyApp;

MyApp.getInitialProps = async (ctx: any) => {
  const sections: string[] = getFileNamesInDirectory();

  return { sections };
};
