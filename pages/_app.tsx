import type { AppProps } from "next/app";

import { useEffect, useRef, useState } from "react";
import { Global as GlobalTheme, ThemeProvider, css } from "@emotion/react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import PwaHead from "../components/head/PwaHead";
import Favicon from "../components/head/Favicon";
import PageHead from "../components/head/PageHead";
import AppComponentWrapper from "../components/app/ComponentWrapper";

import SearchProvider from "../context/SearchContext";

import { ITheme } from "../interfaces/ITheme";

import { PageContainer, VantaContainer } from "../styles/pages/App.styled";
import { lightTheme, darkTheme, breakpoints } from "../styles/theme";

import "../styles/globals.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
import "@fontsource/roboto-mono/700.css";

import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const App = ({ Component, pageProps }: AppProps) => {
  const [currTheme, setTheme] = useState<ITheme>(lightTheme);

  // @ts-ignore
  const { isDisplayDotsPage, isLinkInBioPage } = pageProps;

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

  ////////

  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0x14b679,
          backgroundColor: 0x15173c,
          maxDistance: 34.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);

  return (
    <>
      {/* @ts-ignore */}
      <PageHead {...pageProps.metaTagInputs} />
      <PwaHead />
      <Favicon />
      <ThemeProvider theme={currTheme}>
        <GlobalTheme styles={globalColors} />
        <SearchProvider>
          <Navbar isLinkInBioPage={isLinkInBioPage} toggleTheme={toggleTheme} />
          <VantaContainer ref={vantaRef}>
            <PageContainer>
              <AppComponentWrapper isDisplayDotsPage={isDisplayDotsPage}>
                <Component {...pageProps} />
              </AppComponentWrapper>
              {!isLinkInBioPage && <Footer />}
            </PageContainer>
          </VantaContainer>
        </SearchProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
