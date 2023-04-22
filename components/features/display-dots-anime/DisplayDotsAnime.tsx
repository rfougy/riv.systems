import { useEffect, useMemo } from "react";

import DotWord from "./word/DotWord";
import { useDisplayDotsCoordsContext } from "../../context/DisplayDotsCoordsContext";

import IAllCoords from "../../../interfaces/IAllCoords";

import {
  groupCoordsByChar,
  groupCoordsByWordAndSpace,
} from "../../../lib/display-dots-animation/getCoords";
import { shuffleArr } from "../../../utils";

import {
  Button,
  Container,
  DisplayDotsContainer,
  RestartIcon,
} from "./DisplayDotsAnime.styled";

const DisplayDotsAnime: React.FC<{
  text?: string;
  includeRestartButton?: boolean;
}> = ({ text = "DISPLAY DOTS!", includeRestartButton }) => {
  const { resetAnime, startAnime } = useDisplayDotsCoordsContext();

  const upperCaseText: string = text.toUpperCase();

  const coordsByWordAndSpace: any = useMemo(
    () => Object.values(groupCoordsByWordAndSpace(upperCaseText)),
    [upperCaseText]
  );

  const coordsByChar: IAllCoords[] = useMemo(
    () => Object.values(groupCoordsByChar(upperCaseText)),
    [upperCaseText]
  );

  const allInactiveCoords: number[][] = coordsByChar.reduce(
    (inactiveCoordsList: number[][], coordGroup: IAllCoords) => {
      inactiveCoordsList.push(...coordGroup.inactiveCoords);
      return inactiveCoordsList;
    },
    []
  );

  function start() {
    startAnime(shuffleArr(allInactiveCoords));
  }

  function reset() {
    resetAnime(shuffleArr(allInactiveCoords));
  }

  useEffect((): void => start(), []);

  return (
    <Container>
      <DisplayDotsContainer>
        {coordsByWordAndSpace.map((wordOrSpace: string, index: number) => (
          <DotWord key={index} wordOrSpace={wordOrSpace} />
        ))}
      </DisplayDotsContainer>
      {includeRestartButton && (
        <Button onClick={() => reset()}>
          <RestartIcon />
        </Button>
      )}
    </Container>
  );
};

export default DisplayDotsAnime;
