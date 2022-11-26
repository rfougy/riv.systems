import _ from "lodash";
import { useEffect } from "react";
import {
  groupCoordsByChar,
  groupCoordsByWord,
} from "../../../lib/display-dots-animation/getCoords";
import { shuffleArr } from "../../../utils/shuffleArr";
import IAllCoords from "../../../interfaces/IAllCoords";
import { useDisplayDotsCoordsContext } from "../../context/DisplayDotsCoordsContext";

const DisplayDotsAnimation: React.FC<{ string?: string }> = ({
  string = "EE EE",
}) => {
  const { setInactiveCoords, inactiveCoords, setInactiveCoordsInContext } =
    useDisplayDotsCoordsContext();

  const coordsByWord: any = Object.values(groupCoordsByWord(string));
  const coordsByChar: IAllCoords[] = Object.values(groupCoordsByChar(string));
  const allInactiveCoords: number[][] = coordsByChar.reduce(
    (inactiveCoordsList: number[][], coordGroup: IAllCoords) => {
      inactiveCoordsList.push(...coordGroup.inactiveCoords);
      return inactiveCoordsList;
    },
    []
  );

  useEffect(() => {
    setInactiveCoords(shuffleArr(allInactiveCoords));
    setInactiveCoordsInContext(true);
  }, []);

  return <></>;
};

export default DisplayDotsAnimation;
