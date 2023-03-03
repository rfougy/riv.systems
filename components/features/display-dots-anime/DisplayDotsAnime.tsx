import { useEffect } from "react";

import DotWord from "./word/DotWord";
import { useDisplayDotsCoordsContext } from "../../context/DisplayDotsCoordsContext";

import IAllCoords from "../../../interfaces/IAllCoords";

import {
  groupCoordsByChar,
  groupCoordsByWordAndSpace,
} from "../../../lib/display-dots-animation/getCoords";
import { shuffleArr } from "../../../utils";

import { Container } from "./DisplayDotsAnime.styled";

const DisplayDotsAnime: React.FC<{ text?: string }> = ({
  text = "DISPLAY DOTS!",
}) => {
  const { setInactiveCoords, setInactiveCoordsIsInContext } =
    useDisplayDotsCoordsContext();

  const upperCaseText: string = text.toUpperCase();

  const coordsByWordAndSpace: any = Object.values(
    groupCoordsByWordAndSpace(upperCaseText)
  );
  const coordsByChar: IAllCoords[] = Object.values(
    groupCoordsByChar(upperCaseText)
  );
  const allInactiveCoords: number[][] = coordsByChar.reduce(
    (inactiveCoordsList: number[][], coordGroup: IAllCoords) => {
      inactiveCoordsList.push(...coordGroup.inactiveCoords);
      return inactiveCoordsList;
    },
    []
  );

  useEffect((): void => {
    setInactiveCoords(shuffleArr(allInactiveCoords));
    setInactiveCoordsIsInContext(true);
  }, []);

  return (
    <Container>
      {coordsByWordAndSpace.map((wordOrSpace: string, index: number) => (
        <DotWord key={index} wordOrSpace={wordOrSpace} />
      ))}
    </Container>
  );
};

export default DisplayDotsAnime;
