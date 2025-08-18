import type { AppProps } from "next/app";

import { useEffect, useState } from "react";
import { Global as GlobalTheme, ThemeProvider } from "@emotion/react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import PwaHead from "../components/head/PwaHead";
import Favicon from "../components/head/Favicon";
import PageHead from "../components/head/PageHead";
import AppComponentWrapper from "../components/app/ComponentWrapper";

import SearchProvider from "../context/SearchContext";

import { getGlobalEmotionStyles } from "../utils/app/getGlobalEmotionStyles";

import { ITheme } from "../interfaces/ITheme";

import { PageBox } from "../styles/pages/App.styled";
import { lightTheme, darkTheme } from "../styles/theme";

import "../styles/globals.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
import "@fontsource/roboto-mono/700.css";

const App = ({ Component, pageProps }: AppProps) => {
  const [currTheme, setTheme] = useState<ITheme>(lightTheme);

  // @ts-ignore
  const { isDisplayDotsPage, isLinkInBioPage } = pageProps;

  const globalColors = getGlobalEmotionStyles(currTheme);

  function toggleTheme(): void {
    const newTheme: ITheme =
      currTheme.id === lightTheme.id ? darkTheme : lightTheme;
    sessionStorage.setItem("theme", JSON.stringify(newTheme));
    setTheme(newTheme);
  }

  useEffect((): void => {
    const themeInSessionStorage: string | null =
      sessionStorage.getItem("theme");

    if (themeInSessionStorage) {
      setTheme(JSON.parse(themeInSessionStorage));
    }
  }, []);

  return (
    <>
      {/* @ts-ignore */}
      <PageHead {...pageProps.metaTagInputs} />
      <PwaHead />
      <Favicon />
      <ThemeProvider theme={currTheme}>
        <GlobalTheme styles={globalColors} />
        <SearchProvider>
          {!isLinkInBioPage && <Navbar toggleTheme={toggleTheme} />}
          <PageBox isLinkInBioPage={isLinkInBioPage}>
            <AppComponentWrapper
              isDisplayDotsPage={isDisplayDotsPage}
              isLinkInBioPage={isLinkInBioPage}
            >
              <Component {...pageProps} />
            </AppComponentWrapper>
            {!isLinkInBioPage && <Footer />}
          </PageBox>
        </SearchProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
