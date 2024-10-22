import { GetStaticProps, NextPage } from "next";
import Slideshow from "../components/slideshow/Slideshow";

const TestPage: NextPage = () => {
  const images = [
    {
      src: "https://user-images.githubusercontent.com/77861258/208269441-cf37fdc2-d1d2-4da1-b0ec-6aeedf33f141.jpg",
      alt: "TAKAHIROMIYASHITATheSoloist: SS18 'Femme Fatale' Ring Pistol",
    },
    {
      src: "https://user-images.githubusercontent.com/77861258/208269442-cad09bc2-b459-4c2b-9607-cf7349cd249b.jpg",
      alt: "TAKAHIROMIYASHITATheSoloist: SS18 'Femme Fatale' Ring Pistol",
    },
    {
      src: "https://user-images.githubusercontent.com/77861258/208269443-6ddebd21-bf2d-49f8-bdec-79230d501d1c.jpg",
      alt: "TAKAHIROMIYASHITATheSoloist: SS18 'Femme Fatale' Ring Pistol",
    },
    {
      src: "https://user-images.githubusercontent.com/77861258/208269445-a2fc846c-fc1b-44e0-83f0-08f00aeb3d9d.jpg",
      alt: "TAKAHIROMIYASHITATheSoloist: SS18 'Femme Fatale' Ring Pistol",
    },
    {
      src: "https://user-images.githubusercontent.com/77861258/208269446-5ffa0765-56eb-4573-b450-75b48e488b4d.jpg",
      alt: "TAKAHIROMIYASHITATheSoloist: SS18 'Femme Fatale' Ring Pistol",
    },
    {
      src: "https://user-images.githubusercontent.com/77861258/208269448-8765ff2d-0fb4-4755-b857-a24759d25011.jpg",
      alt: "TAKAHIROMIYASHITATheSoloist: SS18 'Femme Fatale' Ring Pistol",
    },
    {
      src: "https://user-images.githubusercontent.com/77861258/208269449-d6eabdda-df08-4867-ba30-044bf05865a0.JPG",
      alt: "TAKAHIROMIYASHITATheSoloist: SS18 'Femme Fatale' Ring Pistol",
    },
  ];

  return <Slideshow slides={images} />;
};

export default TestPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metaTagInputs: {
        page: "Test Page",
        title: "Test Page",
        description: "Test page for development purposes!",
      },
    },
  };
};
