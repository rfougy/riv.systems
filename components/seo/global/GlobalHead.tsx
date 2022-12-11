import Favicon from "./Favicon";
import Head from "next/head";

const GlobalHead: React.FC = () => {
  return (
    <Head>
      <Favicon />
      <meta name="author" content="Riviere Fougy" />
    </Head>
  );
};

export default GlobalHead;
