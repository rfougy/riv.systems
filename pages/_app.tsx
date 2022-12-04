import "../styles/globals.css";
import type { AppProps } from "next/app";
import DisplayDotsCoordsProvider from "../components/context/DisplayDotsCoordsContext";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { ContentWrap, PageContainer } from "../styles/App.styled";

import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
import "@fontsource/roboto-mono/700.css";

const MyApp = (props: any) => {
  const { Component, pageProps }: AppProps = props;

  return (
    <DisplayDotsCoordsProvider>
      <PageContainer>
        <Navbar />
        <ContentWrap>
          <Component {...pageProps} />
        </ContentWrap>
        <Footer />
      </PageContainer>
    </DisplayDotsCoordsProvider>
  );
};

export default MyApp;
