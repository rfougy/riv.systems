import Document, { Html, Main, Head, NextScript } from "next/document";
import PwaHead from "../components/head/PwaHead";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <PwaHead />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
