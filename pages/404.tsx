import { GetStaticProps, NextPage } from "next";
import NotFound from "../components/shared/not-found/NotFound";

const Custom404: NextPage = () => (
  <NotFound title="404" copy="404 Error: Page not found." />
);

export default Custom404;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metaTagInputs: {
        page: "404",
        title: "404 Error",
        description: "404 Error: Page not found.",
      },
      isDisplayDotsPage: true,
    },
  };
};
