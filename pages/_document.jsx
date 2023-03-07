import Document, { Html, Head, Main, NextScript } from "next/document";
import PwaHead from "../components/head/PwaHead";
import Favicon from "../components/head/Favicon";

const metaDataInputs = {
  title: "RIV.SYSTEMS: Fashion, Web Development, Life Experiences",
  description:
    "Welcome to RIV.SYSTEMS, a personal portfolio and blog website featuring content on fashion, web development, design and more.",
  url: "https://riv.systems/",
  image: "https://i.imgur.com/dk7mgAz.png", // riv.systems logo
};

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <title>{metaDataInputs.title}</title>
          <meta
            name="description"
            key="description"
            content={metaDataInputs.description}
          />
          <meta
            property="og:site_name"
            key="og-site-name"
            content="RIV.SYSTEMS"
          />
          <meta
            property="og:title"
            key="og-title"
            content={metaDataInputs.title}
          />
          <meta
            property="og:description"
            key="og-description"
            content={metaDataInputs.description}
          />
          <meta property="og:type" key="og-type" content="website" />
          <meta
            property="og:image"
            key="og-image"
            content={metaDataInputs.image}
          />
          <meta property="og:url" content={metaDataInputs.url} key="og-url" />
          <meta
            name="twitter:card"
            key="og-twitter-card"
            content="summary_large_image"
          />
          <PwaHead />
          <Favicon /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
