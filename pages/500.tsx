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

const Custom500: NextPage = () => {
  return (
    <>
      <DisplayDotsCoordsProvider>
        <Container>
          <Margin>
            <DisplayDotsAnime text={"500"} />
          </Margin>
          <Description>500 Error: A Server-side error occurred.</Description>
          <Link href={`/content`} passHref>
            <Button>RETURN TO SYSTEMS</Button>
          </Link>
        </Container>
      </DisplayDotsCoordsProvider>
    </>
  );
};

export default Custom500;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metaTagInputs: {
        title: "500 Error",
        description: "500 Error: A Server-side error occurred.",
      },
      isDisplayDotsPage: true,
    },
  };
};
