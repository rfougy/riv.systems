import Document, { Html, Main, Head, NextScript } from "next/document";
import Favicon from "../components/head/Favicon";
import PwaHead from "../components/head/PwaHead";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <Favicon />
          <PwaHead />
          <title>RIV.SYSTEMS</title>
          <meta name="description" content="This is a test test description" />

          {/* Social Share via Open Graph */}
          <meta property="og:site_name" content="RIV.SYSTEMS" />
          <meta property="og:title" content="RIV.SYSTEMS" />
          <meta
            property="og:description"
            content="This is a test description"
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://i.imgur.com/dk7mgAz.png" />
          <meta property="og:url" content="https://riv.systems" />
          <meta name="twitter:card" content="summary_large_image" />
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
