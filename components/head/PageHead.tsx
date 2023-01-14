import Head from "next/head";
import { NextRouter, useRouter } from "next/router";

const PageHead: React.FC<{
  title: string;
  description: string;
  image?: string;
  isHomePage?: boolean;
}> = ({ title, description, image, isHomePage }) => {
  const { asPath }: NextRouter = useRouter();
  const url: string = "https://riv.systems" + asPath;
  const defaultImage: string = "https://i.imgur.com/dk7mgAz.png"; // riv.systems logo

  return (
    <Head>
      <title>{isHomePage ? title : `${title} | RIV.SYSTEMS`}</title>
      <meta name="description" content={description} key="description" />

      <meta property="og:site_name" content="RIV.SYSTEMS" key="og-site-name" />
      <meta
        property="og:title"
        content={`${title} | RIV.SYSTEMS`}
        key="og-title"
      />
      <meta
        property="og:description"
        content={description}
        key="og-description"
      />
      <meta
        property="og:type"
        content={image ? "article" : "website"}
        key="og-type"
      />
      <meta
        property="og:image"
        content={image ? image : defaultImage}
        key="og-image"
      />
      <meta property="og:url" content={url} key="og-url" />
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="og-twitter-card"
      />
    </Head>
  );
};

export default PageHead;
