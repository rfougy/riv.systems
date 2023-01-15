import type { AppProps } from "next/app";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Global as GlobalTheme, ThemeProvider, css } from "@emotion/react";
import "../styles/globals.css";

import Announcement from "../components/announcement/Announcment";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import PwaHead from "../components/head/PwaHead";
import Favicon from "../components/head/Favicon";
import PageHead from "../components/head/PageHead";

import { IAnnouncement } from "../interfaces/IAnnouncement";
import { ITheme } from "../interfaces/ITheme";

import { ContentWrap, PageContainer } from "../styles/pages/App.styled";
import { lightTheme, darkTheme } from "../styles/Themes";

import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
import "@fontsource/roboto-mono/700.css";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  const { route, asPath }: NextRouter = useRouter();

  const url: string = "https://riv.systems" + asPath;
  const defaultImage: string = "https://i.imgur.com/dk7mgAz.png"; // riv.systems logo
  const { title, description, image, isHomePage } = pageProps.metaTagInputs;

  const [currTheme, setTheme] = useState<ITheme>(lightTheme);
  const [announcementIsActive, setAnnouncementIsActive] =
    useState<boolean>(true);
  const [hydrated, setHydrated] = useState<boolean>(false);

  const announcement: IAnnouncement = {
    dateCreated: "2022-01-06",
    text: "'Custom Biker Jacket References' post is now online.",
    link: "/content/refs/misc/2023_01_06_custom-biker-jacket-references",
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

  function toggleTheme(): void {
    const newTheme: ITheme =
      currTheme.id === lightTheme.id ? darkTheme : lightTheme;
    localStorage.setItem("theme", JSON.stringify(newTheme));
    setTheme(newTheme);
  }

  useEffect((): void => {
    const themeInLocalStorage: string | null = localStorage.getItem("theme");

    if (themeInLocalStorage) {
      setTheme(JSON.parse(themeInLocalStorage));
    }
  }, []);

  useEffect((): void => {
    const announcementInLocalStorage: string | null =
      localStorage.getItem("announcement");

    const announcementDate: string | undefined = announcementInLocalStorage
      ? JSON.parse(announcementInLocalStorage).dateCreated
      : undefined;
    const newestAnnouncementDate: string = announcement.dateCreated;

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

  useEffect((): void => setHydrated(true), []);
  if (!hydrated) return null;

  return (
    <>
      {/* description: references metaTagInputs via pre-rendering methods */}
      {/* @ts-ignore */}
      {/* <PageHead {...pageProps.metaTagInputs} /> */}
      <PwaHead />
      <Favicon />
      <Head>
        <title>{isHomePage ? title : `${title} | RIV.SYSTEMS`}</title>
        <meta name="description" key="description" content={description} />

        <meta
          property="og:site_name"
          key="og-site-name"
          content="RIV.SYSTEMS"
        />
        <meta
          property="og:title"
          key="og-title"
          content={`${title} | RIV.SYSTEMS`}
        />
        <meta
          property="og:description"
          key="og-description"
          content={description}
        />
        <meta
          property="og:type"
          key="og-type"
          content={image ? "article" : "website"}
        />
        <meta
          property="og:image"
          key="og-image"
          content={image ? image : defaultImage}
        />
        <meta property="og:url" content={url} key="og-url" />
        <meta
          name="twitter:card"
          key="og-twitter-card"
          content="summary_large_image"
        />
      </Head>
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
          <ContentWrap isHomePage={route === "/"}>
            <Component {...pageProps} />
          </ContentWrap>
          <Footer />
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
