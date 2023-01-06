import Favicon from "./Favicon";
import Head from "next/head";
/**
 * @see https://github.com/shadowwalker/next-pwa
 */
const GlobalHead: React.FC = () => (
  <Head>
    <Favicon />
  </Head>
);

export default GlobalHead;
