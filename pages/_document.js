import Document, { Html, Head, Main, NextScript } from "next/document";
import PageHead from "../components/head/PageHead";

const metaDataInputs = {
  title: "RIV.SYSTEMS: Fashion, Web Development, Life Experiences",
  description:
    "Welcome to RIV.SYSTEMS, a personal portfolio and blog website featuring content on fashion, web development, design and more.",
  isHomePage: true,
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
          <PageHead {...metaDataInputs} />
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
