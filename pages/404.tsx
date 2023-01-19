import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import DisplayDotsCoordsProvider from "../components/context/DisplayDotsCoordsContext";
import DisplayDotsAnime from "../components/features/display-dots-anime/DisplayDotsAnime";
import {
  Button,
  Container,
  Description,
  Margin,
} from "../styles/pages/DisplayDotsPage.styled";

const Custom404: NextPage = () => {
  return (
    <>
      <DisplayDotsCoordsProvider>
        <Container>
          <Margin>
            <DisplayDotsAnime text={"404"} />
          </Margin>
          <Description>404 Error: Page not found.</Description>
          <Link href={`/content`} passHref>
            <Button>RETURN TO SYSTEMS</Button>
          </Link>
        </Container>
      </DisplayDotsCoordsProvider>
    </>
  );
};

export default Custom404;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metaTagInputs: {
        title: "404 Error",
        description: "404 Error: Page not found.",
      },
      isDisplayDotsPage: true,
    },
  };
};
