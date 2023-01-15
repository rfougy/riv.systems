import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";

const PageHead: React.FC<{
  title: string;
  description: string;
  image?: string;
  isHomePage?: boolean;
}> = ({ title, description, image, isHomePage }) => {
  useEffect(() => console.log(image));

  const { asPath }: NextRouter = useRouter();
  const url: string = "https://riv.systems" + asPath;
  const defaultImage: string = "https://i.imgur.com/dk7mgAz.png"; // riv.systems logo

  return (
    <Head>
      <title>{isHomePage ? title : `${title} | RIV.SYSTEMS`}</title>
      <meta name="description" key="description" content={description} />

      <meta property="og:site_name" key="og-site-name" content="RIV.SYSTEMS" />
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
  );
};

export default PageHead;
