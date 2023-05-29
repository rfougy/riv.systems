import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Global as GlobalTheme, ThemeProvider, css } from "@emotion/react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import PwaHead from "../components/head/PwaHead";
import Favicon from "../components/head/Favicon";
import PageHead from "../components/head/PageHead";

import { ITheme } from "../interfaces/ITheme";

import { ContentWrap, PageContainer } from "../styles/pages/App.styled";
import { lightTheme, darkTheme, breakpoints } from "../styles/theme";

import "../styles/globals.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
import "@fontsource/roboto-mono/700.css";
import SearchResults from "../components/features/search/search-results/SearchResults";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps) => {
  const [currTheme, setTheme] = useState<ITheme>(lightTheme);
  const [searchIconClicked, setSearchIconClicked] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const router = useRouter();

  // Home Page, 404 Page, 500 Page
  // @ts-ignore
  const isDisplayDotsPage = pageProps.isDisplayDotsPage ? true : false;

  const globalColors = css`
    body {
      background-color: ${currTheme.secondary};
      transition: 100ms ease-in; // ease-in for theme toggling
    }

    body::-webkit-scrollbar {
      width: 0.75rem;
      height: 0;

      @media (max-width: ${breakpoints.xs}) {
        width: 0.5rem;
        height: 0;
      }
    }

    body::-webkit-scrollbar-track {
      background-color: transparent;
      border-left: 0.1rem solid ${currTheme.primary};
    }

    body::-webkit-scrollbar-thumb {
      height: 0;
      width: 1rem;
      background-color: none;
      border-top: 0.1rem solid ${currTheme.primary};

      opacity: 0.5;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    caption,
    li {
      color: ${currTheme.primary};
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

  useEffect(() => {
    router.events.on("routeChangeStart", () => setSearchIconClicked(false));
    return () =>
      router.events.off("routeChangeStart", () => setSearchIconClicked(false));
  }, []);

  return (
    <>
      {/* @ts-ignore */}
      <PageHead {...pageProps.metaTagInputs} />
      <PwaHead />
      <Favicon />
      <ThemeProvider theme={currTheme}>
        <GlobalTheme styles={globalColors} />
        <Navbar
          searchIconClicked={searchIconClicked}
          setSearchIconClicked={setSearchIconClicked}
          setSearchResults={setSearchResults}
          toggleTheme={toggleTheme}
        />
        <PageContainer>
          <ContentWrap isDisplayDotsPage={isDisplayDotsPage}>
            {searchIconClicked ? (
              <SearchResults results={searchResults} />
            ) : (
              <Component {...pageProps} />
            )}
          </ContentWrap>
          <Footer />
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
