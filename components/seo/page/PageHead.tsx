import Head from "next/head";

const PageHead: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <Head>
      <title>{title} | riv.systems</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default PageHead;
