import _ from "lodash";
import { useEffect } from "react";
import {
  groupCoordsByChar,
  groupCoordsByWordAndSpace,
} from "../../../lib/display-dots-animation/getCoords";
import { shuffleArr } from "../../../utils/shuffleArr";
import IAllCoords from "../../../interfaces/IAllCoords";
import { useDisplayDotsCoordsContext } from "../../context/DisplayDotsCoordsContext";
import DotWord from "./word/DotWord";

import * as S from "./DisplayDotsAnime.styled";

const DisplayDotsAnime: React.FC<{ text?: string }> = ({
  text = "RIV.SYSTEMS",
}) => {
  const { setInactiveCoords, setInactiveCoordsIsInContext } =
    useDisplayDotsCoordsContext();

  const coordsByWordAndSpace: any = Object.values(
    groupCoordsByWordAndSpace(text)
  );
  const coordsByChar: IAllCoords[] = Object.values(groupCoordsByChar(text));
  const allInactiveCoords: number[][] = coordsByChar.reduce(
    (inactiveCoordsList: number[][], coordGroup: IAllCoords) => {
      inactiveCoordsList.push(...coordGroup.inactiveCoords);
      return inactiveCoordsList;
    },
    []
  );

  useEffect(() => {
    setInactiveCoords(shuffleArr(allInactiveCoords));
    setInactiveCoordsIsInContext(true);
    console.log(coordsByWordAndSpace);
  }, []);

  return (
    <S.Container>
      {coordsByWordAndSpace.map((wordOrSpace: any, index: number) => (
        <DotWord key={index} wordOrSpace={wordOrSpace} />
      ))}
    </S.Container>
  );
};

export default DisplayDotsAnime;
