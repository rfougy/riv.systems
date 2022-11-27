import _ from "lodash";
import { useEffect } from "react";
import {
  groupCoordsByChar,
  groupCoordsByWordAndSpace,
} from "../../../lib/display-dots-animation/getCoords";
import { shuffleArr } from "../../../utils/shuffleArr";
import IAllCoords from "../../../interfaces/IAllCoords";
import { useDisplayDotsCoordsContext } from "../../context/DisplayDotsCoordsContext";
import DotWord from "./DotWord";

const DisplayDotsAnimation: React.FC<{ string?: string }> = ({
  string = "EE EE",
}) => {
  const { setInactiveCoords, inactiveCoords, setInactiveCoordsInContext } =
    useDisplayDotsCoordsContext();

  const coordsByWordAndSpace: any = Object.values(
    groupCoordsByWordAndSpace(string)
  );
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
    console.log("ALL WORDS: ", coordsByWordAndSpace);
  }, []);

  return (
    <div>
      {coordsByWordAndSpace.map((wordOrSpace: any, index: number) => (
        <DotWord key={index} wordOrSpace={wordOrSpace} />
      ))}
    </div>
  );
};

export default DisplayDotsAnimation;
