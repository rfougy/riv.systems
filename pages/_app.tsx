import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalHead from "../components/seo/global/GlobalHead";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { ContentWrap, PageContainer } from "../styles/pages/App.styled";

import { Global as GlobalTheme, css } from "@emotion/react";
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
    <>
      <GlobalHead />
      <ThemeProvider theme={currTheme}>
        <GlobalTheme styles={globalColors} />
        <PageContainer>
          <Navbar toggleTheme={toggleTheme} theme={currTheme} />
          <ContentWrap>
            <Component {...pageProps} />
          </ContentWrap>
          <Footer />
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
