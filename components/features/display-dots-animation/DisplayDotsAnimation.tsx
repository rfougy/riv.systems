import { useEffect } from "react";
import { groupCoords as getCoords } from "../../../lib/display-dots-animation/getCoords";
import IAllCoords from "../../../interfaces/IAllCoords";

const DisplayDotsAnimation: React.FC<{ string?: string }> = ({
  string = "EE EE",
}) => {
  const groupedCoords: IAllCoords[] = Object.values(getCoords(string));

  useEffect(() => {
    console.log("groupedCoords: ", groupedCoords);
  }, []);

  return <></>;
};

export default DisplayDotsAnimation;
