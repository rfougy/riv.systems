import "../styles/globals.css";
import type { AppProps } from "next/app";
import DisplayDotsCoordsProvider from "../components/context/DisplayDotsCoordsContext";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { getFileNamesInDirectory } from "../lib/cms/getCmsContent";

const MyApp = (props: any) => {
  const { Component, pageProps }: AppProps = props;

  return (
    <DisplayDotsCoordsProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </DisplayDotsCoordsProvider>
  );
};

export default MyApp;

/**
 * @deprecated currently not in use, alternative approach required.
 */
// MyApp.getInitialProps = async () => {
//   const sections: string[] = getFileNamesInDirectory();

//   return { sections };
// };
