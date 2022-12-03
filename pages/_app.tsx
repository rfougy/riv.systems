import "../styles/globals.css";
import type { AppProps } from "next/app";
import DisplayDotsCoordsProvider from "../components/context/DisplayDotsCoordsContext";
import Navbar from "../components/navbar/Navbar";
import { getFileNamesInDirectory } from "../lib/cms/getCmsContent";
import Footer from "../components/footer/Footer";

const MyApp = (props: any) => {
  const { Component, pageProps }: AppProps = props;

  return (
    <DisplayDotsCoordsProvider>
      <Navbar sections={props.sections} />
      <Component {...pageProps} />
      <Footer />
    </DisplayDotsCoordsProvider>
  );
};

export default MyApp;

MyApp.getInitialProps = async () => {
  const sections: string[] = getFileNamesInDirectory();

  return { sections };
};
