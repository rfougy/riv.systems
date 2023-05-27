import { GetStaticProps, NextPage } from "next";
import NotFound from "../components/shared/not-found/NotFound";

const Custom500: NextPage = () => (
  <NotFound title="500" copy="500 Error: A Server-side error occurred." />
);

export default Custom500;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metaTagInputs: {
        page: "500",
        title: "500 Error",
        description: "500 Error: A Server-side error occurred.",
      },
      isDisplayDotsPage: true,
    },
  };
};
