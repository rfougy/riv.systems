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
      <meta name="description" content={description} />

      {/* Social Share via Open Graph */}
      <meta property="og:site_name" content="RIV.SYSTEMS" />
      <meta property="og:title" content={`${title} | RIV.SYSTEMS`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={image ? "article" : "website"} />
      <meta property="og:image" content={image ? image : defaultImage} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default PageHead;
