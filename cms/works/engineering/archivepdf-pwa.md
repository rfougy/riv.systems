---
title: ARCHIVE.pdf Progressive Web App
datePublished: "2025-11-05"
section: works
category: engineering
excerpt: What started as a Wix site became a full-fledged PWA, built entirely by volunteers tackling everything from CMS setup to slashing server costs and more.
coverImage: "/works/engineering/archivepdf-pwa/apdf-pwa_cover.png"
worksTeamSize: 5
worksRoles: ["Product Manager", "Fullstack Engineer"]
worksDuration: ["11.21", "08.25"]
worksTools:
  [
    "NextJS",
    "React",
    "Typescript",
    "Tailwind CSS",
    "Husky",
    "Strapi CMS",
    "PostgreSQL",
    "AWS S3",
    "GitHub Actions",
    "CircleCI",
    "DigitalOcean",
  ]
---

[ARCHIVE.pdf’s Progressive Web App](https://www.archivepdf.net/) was a natural progression from the company’s prior website built on Wix, opening up unlimited possibilities for domain-specific features and user experiences. The app was built by a team of volunteer developers since 2021, making the project an even greater achievement when compared to traditional teams.

## Key Contributions

### Strapi CMS

One of the first and most critical decisions was selecting a Content Management System (CMS) to manage the company’s content and integrate it into the app. We chose [Strapi](https://strapi.io/), an open-source CMS that gave us a generous amount of ownership and flexibility for creating our own custom solutions. The CMS was deployed on [DigitalOcean](https://www.digitalocean.com/) App Platform and is connected to a PostgreSQL database on DigitalOcean, with automatic deployments triggered by commits to the monorepo's production branch.

<br/>
<br/>

<Slideshow hideThumbnails aspectRatio="34 / 20" navArrowColor="#000000" slides='[
  { "src": "/works/engineering/archivepdf-pwa/apdf-pwa_strapi-1.png", "alt": "Screenshot of ARCHIVE.pdf Strapi" },
  { "src": "/works/engineering/archivepdf-pwa/apdf-pwa_strapi-2.png", "alt": "Screenshot of ARCHIVE.pdf Strapi" }
]' />

<br/>
<br/>

Over time, we customized Strapi’s default configurations to meet ARCHIVE.pdf’s needs. This ranged from integrating AWS S3 (and later Backblaze) for file storage, to live page previews for article and scan drafts, and configuring webhooks to trigger frontend deployments whenever content changes were published in Strapi.

### Recommendations Algorithm

As with any content-heavy platform, it was imperative for ARCHIVE.pdf to have a recommendations system that kept users engaged with the app. As such, I created an algorithm to recommend a total of 3 content pages based on shared hashtags and recency.

The algorithm accepts two inputs: data from the current content page and data from all similar content (e.g., all articles, all scans). The current page’s hashtags are extracted and used for ranking all similar content by the number of shared hashtags. The top 3 content pages with the most hashtags shared are selected as recommendations. However, if there are less than 3 content pages selected, any remaining slots are filled with the most recently published content. This fallback mechanism guarantees users always have relevant options to explore.

### Reducing Operational Costs

Although the majority of ARCHIVE.pdf’s audience was still visiting the old website, the public announcement of the PWA beta drove a significant influx of traffic that increased monthly operational costs. The app was exceeding Vercel’s Pro Plan tier limits for [Fast Origin Transfers](https://vercel.com/docs/manage-cdn-usage#fast-origin-transfer) and [ISR Reads](https://vercel.com/docs/incremental-static-regeneration/limits-and-pricing#isr-reads-and-writes-price), while AWS S3 costs were also rising.

To resolve this, I refactored our data fetching methods by using [Strapi’s REST API parameters](https://docs.strapi.io/cms/api/rest/parameters) to reduce response payload sizes. This optimization shrunk the app’s bundle size since most pages were statically generated at build time, and most importantly reduced both Fast Origin Transfers and ISR reads by 80%.

As for storage costs, I decided for us to switch to [Backblaze](https://www.backblaze.com/) due to its affordability. I implemented a migration strategy with fallback logic where, if a file hadn't yet been migrated to Backblaze, the app would automatically fetch it from S3, ensuring zero downtime during the transition.
