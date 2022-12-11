import Favicon from "../global/Favicon";
import Head from "next/head";

const PageHead: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>{title} | riv.systems</title>
    </Head>
  );
};

export default PageHead;
