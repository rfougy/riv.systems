import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import Script from "next/script";

const PageHead: React.FC<{
  page: string;
  title: string;
  description: string;
  image?: string;
  isHomePage?: boolean;
}> = ({ page, title, description, image, isHomePage }) => {
  const { asPath }: NextRouter = useRouter();
  const url: string = "https://riv.systems" + asPath;
  const defaultImage: string = "https://i.imgur.com/dk7mgAz.png"; // riv.systems logo

  return (
    <>
      <Head>
        <title>{isHomePage ? title : `${title} | RIV.SYSTEMS`}</title>
        <meta
          name="description"
          key={`description-${page}`}
          content={description}
        />

        <meta
          property="og:site_name"
          key={`og-site-name-${page}`}
          content="RIV.SYSTEMS"
        />
        <meta
          property="og:title"
          key={`og-title-${page}`}
          content={`${title} | RIV.SYSTEMS`}
        />
        <meta
          property="og:description"
          key={`og-description-${page}`}
          content={description}
        />
        <meta
          property="og:type"
          key={`og-type-${page}`}
          content={image ? "article" : "website"}
        />
        <meta
          property="og:image"
          key={`og-image-${page}`}
          content={image ? image : defaultImage}
        />
        <meta property="og:url" content={url} key={`og-url-${page}`} />
        <meta
          name="twitter:card"
          key={`og-twitter-card-${page}`}
          content="summary_large_image"
        />
      </Head>
      <Script
        id="JSON-LD"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": image ? "article" : "website",
            name: title,
            about: description,
            url: url,
          }),
        }}
      />
    </>
  );
};

export default PageHead;
