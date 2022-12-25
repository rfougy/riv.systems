import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

import Announcement from "../components/announcement/Announcment";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import { Global as GlobalTheme, ThemeProvider, css } from "@emotion/react";
import { ContentWrap, PageContainer } from "../styles/pages/App.styled";
import { lightTheme, darkTheme } from "../styles/Themes";
import "../styles/globals.css";

import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
import "@fontsource/roboto-mono/700.css";
import GlobalHead from "../components/head/global/GlobalHead";

const App = (props: any) => {
  const { Component, pageProps }: AppProps = props;
  const [currTheme, setTheme] = useState<any>(lightTheme);
  const [announcementIsActive, setAnnouncementIsActive] =
    useState<boolean>(true);

  const announcement = {
    dateCreated: "2022-12-18",
    text: "3 new posts are up!",
  };

  const globalColors = css`
    body {
      background-color: ${currTheme.secondary};
      transition: 100ms ease-in; // ease-in for theme toggling
    }

    body::-webkit-scrollbar {
      width: 0.75rem;
      height: 0;

      @media (max-width: 40em) {
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
    p {
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

  /**
   * @description remove console logs in production.
   */
  if (process.env.NODE_ENV !== "development") {
    console.log = () => {};
    console.error = () => {};
    console.debug = () => {};
  }

  function toggleTheme(): void {
    const newTheme = currTheme.id === lightTheme.id ? darkTheme : lightTheme;
    localStorage.setItem("theme", JSON.stringify(newTheme));
    setTheme(newTheme);
  }

  useEffect(() => {
    const themeInLocalStorage = localStorage.getItem("theme");

    if (themeInLocalStorage) {
      setTheme(JSON.parse(themeInLocalStorage));
    }
  }, []);

  useEffect(() => {
    const announcementInLocalStorage: any =
      localStorage.getItem("announcement");

    const announcementDate = announcementInLocalStorage
      ? JSON.parse(announcementInLocalStorage).dateCreated
      : undefined;
    const newestAnnouncementDate = announcement.dateCreated;

    if (
      announcementInLocalStorage &&
      announcementDate === newestAnnouncementDate
    ) {
      setAnnouncementIsActive(false);
    } else {
      localStorage.removeItem("announcement");
      setAnnouncementIsActive(true);
    }
  }, []);

  return (
    <>
      <GlobalHead />
      <ThemeProvider theme={currTheme}>
        <GlobalTheme styles={globalColors} />
        {announcementIsActive && (
          <Announcement
            theme={currTheme}
            setAnnouncementIsActive={setAnnouncementIsActive}
            announcement={announcement}
          />
        )}
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

export default App;
