import Favicon from "./Favicon";
import Head from "next/head";

const GlobalHead: React.FC = () => {
  return (
    <Head>
      <Favicon />
    </Head>
  );
};

export default GlobalHead;
