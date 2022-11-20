import _ from "lodash";
import { useEffect } from "react";
import styles from "./DisplayDotsAnimation.module.css";
import { groupCoords as getCoords } from "../../../lib/displayDotsAnimation/getCoords";
import IAllCoords from "../../../interfaces/IAllCoords";

const DisplayDotsAnimation: React.FC<{ string?: string }> = ({
  string = "EE EE",
}) => {
  const coords: IAllCoords[] = Object.values(getCoords(string));

  useEffect(() => {
    console.log("coords: ", coords);
  }, []);

  return (
    <div>
      <div className={styles.container}></div>
      <div className={styles.dot} />
      <hr />
      {string}
    </div>
  );
};

export default DisplayDotsAnimation;
