import { useEffect, useState } from "react";
import { useDisplayDotsCoordsContext } from "../../../context/DisplayDotsCoordsContext";
import * as S from "./DotCell.styled";
import _ from "lodash";

const DotCell: React.FC<{ coord: any }> = ({ coord }) => {
  const [isDeactivated, setIsDeactivated] = useState<boolean>(false);

  const { deactivatedCoords } = useDisplayDotsCoordsContext();

  useEffect(() => {
    console.log("COORD: ", coord);
  }, []);

  useEffect(() => {
    const coordInDeactivatedList = _.includes(deactivatedCoords, coord);

    if (coordInDeactivatedList) {
      console.log("HIT");
      setIsDeactivated(true);
    }
  }, [coord, deactivatedCoords]);

  return <S.Dot isDeactivated={isDeactivated} />;
};

export default DotCell;
