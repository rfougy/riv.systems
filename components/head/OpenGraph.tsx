import { NextSeo } from "next-seo";
import { NextRouter, useRouter } from "next/router";

import React from "react";

const OpenGraph: React.FC<{
  title: string;
  description: string;
  image?: string;
  isHomePage?: boolean;
}> = ({ title, description, image, isHomePage }) => {
  const { asPath }: NextRouter = useRouter();
  const url: string = "https://riv.systems" + asPath;
  const defaultImage: string = "https://i.imgur.com/dk7mgAz.png"; // riv.systems logo

  return (
    <NextSeo
      openGraph={{
        title: isHomePage ? title : `${title} | RIV.SYSTEMS`,
        description: description,
        url: url,
        type: image ? "article" : "website",
        images: [
          {
            url: image ? image : defaultImage,
            width: 850,
            height: 650,
            alt: `Cover Image for ${title}`,
          },
        ],
      }}
    />
  );
};

export default OpenGraph;
