import { useEffect, useMemo, useState } from "react";
import { useDisplayDotsCoordsContext } from "../../../context/DisplayDotsCoordsContext";

import DotWord from "./word/DotWord";
import IconButton from "../../shared/icon-button/IconButton";

import IAllCoords from "../../../interfaces/IAllCoords";

import {
  groupCoordsByChar,
  groupCoordsByWordAndSpace,
} from "../../../lib/display-dots-animation/getCoords";
import { shuffleArr } from "../../../utils";
import restartIcon from "../../../public/assets/icons/restart-icon.svg";

import { Container, DisplayDotsContainer } from "./DisplayDotsAnime.styled";

const DisplayDotsAnime: React.FC<{
  text?: string;
  includeRestartButton?: boolean;
}> = ({ text = "DISPLAY DOTS!", includeRestartButton }) => {
  const [restartButtonRotating, setRestartButtonRotating] =
    useState<boolean>(false);

  const { restartAnime, startAnime, animeEnded } =
    useDisplayDotsCoordsContext();

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

  function restart() {
    restartAnime(shuffleArr(allInactiveCoords));
  }

  useEffect((): void => start(), []);
  useEffect(() => setRestartButtonRotating(animeEnded), [animeEnded]);

  return (
    <Container>
      <DisplayDotsContainer>
        {coordsByWordAndSpace.map((wordOrSpace: string, index: number) => (
          <DotWord key={index} wordOrSpace={wordOrSpace} />
        ))}
      </DisplayDotsContainer>
      {includeRestartButton && (
        <IconButton
          src={restartIcon}
          alt="restart icon"
          ariaLabel="restart animation"
          isDisabled={!animeEnded}
          rotate={restartButtonRotating.toString() as "true" | "false"}
          onClick={() => restart()}
        />
      )}
    </Container>
  );
};

export default DisplayDotsAnime;
