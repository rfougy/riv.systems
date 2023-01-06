import Head from "next/head";

const Favicon: React.FC = () => (
  <Head>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icon/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/icon/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/icon/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/manifest.json" />
    <link
      rel="mask-icon"
      href="/icon/favicon/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="msapplication-TileColor" content="#101010" />
    <meta name="theme-color" content="#ffffff"></meta>
  </Head>
);

export default Favicon;
