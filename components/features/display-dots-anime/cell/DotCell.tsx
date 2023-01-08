import { useEffect, useState } from "react";

import { useDisplayDotsCoordsContext } from "../../../context/DisplayDotsCoordsContext";

import { Dot } from "./DotCell.styled";

const DotCell: React.FC<{ coord: number[] }> = ({ coord }) => {
  const [isDeactivated, setIsDeactivated] = useState<boolean>(false);

  const { deactivatedCoords: dCoords } = useDisplayDotsCoordsContext();

  useEffect(() => {
    const latestDCoord: number[] | undefined = dCoords
      ? dCoords[dCoords.length - 1]
      : undefined;
    const coordMatchesDCoord: boolean | undefined =
      latestDCoord &&
      latestDCoord[0] === coord[0] &&
      latestDCoord[1] === coord[1];

    if (coordMatchesDCoord) {
      setIsDeactivated(true);
    }
  }, [coord, dCoords]);

  return <Dot isDeactivated={isDeactivated} />;
};

export default DotCell;
