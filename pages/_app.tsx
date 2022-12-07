import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { ContentWrap, PageContainer } from "../styles/pages/App.styled";
import DisplayDotsCoordsProvider from "../components/context/DisplayDotsCoordsContext";

import { Global, css } from "@emotion/react";
import { lightTheme, darkTheme } from "../styles/Themes";
import { ThemeProvider } from "@emotion/react";

import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
import "@fontsource/roboto-mono/700.css";
import { useEffect, useState } from "react";

const MyApp = (props: any) => {
  const { Component, pageProps }: AppProps = props;
  const [currTheme, setTheme] = useState<any>(lightTheme);

  useEffect(() => {
    const themeInLocalStorage = localStorage.getItem("theme");

    if (themeInLocalStorage) {
      setTheme(JSON.parse(themeInLocalStorage));
    }
  }, []);

  function toggleTheme(): void {
    const newTheme = currTheme.id === lightTheme.id ? darkTheme : lightTheme;
    localStorage.setItem("theme", JSON.stringify(newTheme));
    setTheme(newTheme);
  }

  const globalColors = css`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      color: ${currTheme.primary};
    }

    body {
      background-color: ${currTheme.secondary};
    }

    a {
      color: ${currTheme.primary};
    }

    button {
      color: ${currTheme.primary};
      background-color: ${currTheme.secondary};
    }

    label {
      color: ${currTheme.primary};
    }
  `;

  return (
    <ThemeProvider theme={currTheme}>
      <Global styles={globalColors} />
      <DisplayDotsCoordsProvider>
        <PageContainer>
          <Navbar toggleTheme={toggleTheme} />
          <ContentWrap>
            <Component {...pageProps} />
          </ContentWrap>
          <Footer />
        </PageContainer>
      </DisplayDotsCoordsProvider>
    </ThemeProvider>
  );
};

export default MyApp;
