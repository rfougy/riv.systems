import Head from "next/head";

const PageHead: React.FC<{
  title: string;
  description: string;
  isHomePage?: boolean;
}> = ({ title, description, isHomePage }) => {
  return (
    <Head>
      <title>{isHomePage ? title : `${title} | RIV.SYSTEMS}`}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default PageHead;
