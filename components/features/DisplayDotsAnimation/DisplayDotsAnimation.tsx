import _ from "lodash";
import { useEffect } from "react";
import styles from "./DisplayDotsAnimation.module.css";
import { groupCoords as getCoords } from "../../../lib/displayDotsAnimation/getCoords";

const DisplayDotsAnimation: React.FC<{ string?: string }> = ({
  string = "EE EE",
}) => {
  const coords = getCoords(string);

  useEffect(() => {
    console.log("coords: ", coords);
  }, []);

  /**
   *
   * declare a variable where the value is a filter through the above variable. The result is an array of inactive coordinates, aka negative space.
   *
   * *********CREATE TESTS
   *
   * Need to take into account words and flex wrapping...
   * [X] 1. split the string into an array of words
   * [X] 2. map through each word and get active dot coordinates;
   * [X]   a. add 1 extra width to totalWidth (aka charStartingXCoord) to account for missing spaces inbetween words.
   * [X]   b. after mapping, flatten array (Ex. [[[0,1], [0,2]], [[1,1], [2,2]]] --> [[0,1], [0,2], [1,1], [2,2]]).
   * [X] 3. create list of inactive dot coordinates that references the flattened array.
   * [X] 4. create list 'allCoords' that merges both active and inactive coordinate lists.
   * [X]   a. the general idea is to reference coordinates in allCoords, then group them by width
   * [X]     i. Ex. word has max xcoord of 4, group coordinates with max xcoord 4).
   * [X]   b. after/while grouping, sort coordinates in each group in ascending order (Ex. [[0,0] [0,1] [0,2]] [[1,0]] ...)
   *
   *  5. From here we would create the HTML structure.
   *    a. 3 components used: DotRow and DotCell
   *
   *      // map through each group of coordinates
   *      <DotWord>
   *       <DotRow>
   *         // map through each coordinate in group
   *         <DotCell coord={[0,0]}>
   *         <DotCell coord={[0,1]}>
   *         <DotCell coord={[0,2]}>
   *         ...
   *       </DotRow>
   *      </DotWord>
   *
   *  - Method for animation
   *    a...
   *      1... via DisplayDotsAnimation Component
   *      6. setInterval every x milliseconds, select an inactive coord from list of inactive coordinates.
   *        a. Set coordToDeactivate state to the selected inactive coord.
   *        b. remove the selected inactive coord from the list.
   *      7. clearInterval once list of inactive coordinates is empty.
   *      2... via DotCell Component
   *      8. create a useEffect that watches for changes in coordToDeactivate.
   *      9. if the coord for the DotCell matches the coord in coordToDeactivate, change the styling to have the dot "dissapear" in the UI.
   */

  // const dotWidthOfStr = charArr.reduce((count: number, character: string) => {
  //   if (Number(character) === 0) {
  //     count += displayDotsDictionaryClone[" "].width;
  //   } else {
  //     count += displayDotsDictionaryClone[character].width;
  //   }
  //   return count;
  // }, 0);

  // const dotMatrix: number = dotWidthOfStr * 5;
  // function mappableDotMatrix() {
  //   let count: number = 0;
  //   const dotMatrixAsArray: number[] = [];
  //   while (count !== dotMatrix) {
  //     count++;
  //     dotMatrixAsArray.push(count);
  //   }
  //   return dotMatrixAsArray;
  // }

  // function coordinateToSingleDotInMatrix(coordinate: number[]) {
  //   let yCoordinate = coordinate[0];
  //   let xCoordinate = coordinate[1];

  //   if (!coordinate) return;

  //   return yCoordinate * dotWidthOfStr + xCoordinate;
  // }

  return (
    <div>
      <div className={styles.container}>
        {/* {mappableDotMatrix().map((index: number) => (
          <div key={index} className={styles.dot} />
        ))} */}
      </div>
      <div className={styles.dot} />
      <hr />
      {string}
    </div>
  );
};

export default DisplayDotsAnimation;
