import styles from "./DisplayDotsAnimation.module.css";
import { displayDotsDictionary } from "../../../dictionaries/displayDotsDictionary";
import { useEffect } from "react";

/**
 * @description Providing methods and approach to use for DisplayDots animation.
 *
 * @description using setInterval to have dots dissapear at given time intervals, clearInterval for stopping setInterval once the text is fully shown.
 * @example Using setInterval and clearInterval
 * var refreshId = setInterval(function() {
 *      var properID = CheckReload();
 *      if (properID > 0) {
 *          <--- exit from the loop--->
 *      }
 *   }, 10000);
 *
 * @note 1 second = 1000 milliseconds
 *
 * @description CSS for creating circle
 * @example
 * #circle {
 *  background: lightblue;
 *  border-radius: 50%;
 *  width: 100px;
 *  height: 100px;
 * }
 */

const DisplayDotsAnimation: React.FC<{ string?: string }> = ({
  string = "E E",
}) => {
  const charArr: string[] = string.toUpperCase().split("");
  const displayDotsDictionaryClone = structuredClone(displayDotsDictionary);

  function getAllActiveDotCoordinates() {
    let charStartingXCoordPosition: number = 0;

    const activeDotCoordinates = charArr.map((char: string) => {
      const dictionaryChar = displayDotsDictionaryClone[char];

      let newCoordinates;

      if (dictionaryChar.coordinates !== null) {
        newCoordinates = structuredClone(dictionaryChar.coordinates);

        newCoordinates.map((coordinate: number[]) => {
          coordinate[1] += charStartingXCoordPosition;
        });

        dictionaryChar.coordinates = newCoordinates;
      }

      charStartingXCoordPosition += dictionaryChar.width;

      const output = {
        width: dictionaryChar.width,
        coordinates: dictionaryChar.coordinates,
      };

      return output;
    });

    return activeDotCoordinates;
  }

  const dotWidthOfStr = charArr.reduce((count: number, character: string) => {
    if (Number(character) === 0) {
      count += displayDotsDictionaryClone[" "].width;
    } else {
      count += displayDotsDictionaryClone[character].width;
    }
    return count;
  }, 0);

  const dotMatrix: number = dotWidthOfStr * 5;
  function mappableDotMatrix() {
    let count: number = 0;
    const dotMatrixAsArray: number[] = [];
    while (count !== dotMatrix) {
      count++;
      dotMatrixAsArray.push(count);
    }
    return dotMatrixAsArray;
  }

  function coordinateToSingleDotInMatrix(coordinate: number[]) {
    let yCoordinate = coordinate[0];
    let xCoordinate = coordinate[1];

    if (!coordinate) return;

    return yCoordinate * dotWidthOfStr + xCoordinate;
  }

  /**
   *
   * declare a variable where the value is a filter through the above variable. The result is an array of inactive coordinates, aka negative space.
   *
   * Need to take into account words and flex wrapping...
   *  - split the string into an array of words
   *  - map through each word and get active dot coordinates;
   *    - add 1 extra width to totalWidth (aka charStartingXCoordPosition) to account for missing spaces inbetween words.
   *    - after mapping, flatten array (Ex. [[[0,1], [0,2]], [[1,1], [2,2]]] --> [[0,1], [0,2], [1,1], [2,2]]).
   *  - create list of inactive dot coordinates that references the flattened array.
   *  - create list 'mergedList' that merges both active and inactive coordinate lists.
   *    - the general idea is to reference coordinates in mergedList, then group them by width
   *      - Ex. word has max xcoord of 4, group coordinates with max xcoord 4).
   *    - after/while grouping, sort coordinates in each group in ascending order (Ex. [0,0] [0,1] [0,2] [1,0] ...)
   *      - *Note: is there a built-in method that can sort mergedList?
   * 
   *  - From here we would create the HTML structure.
   *    - 3 components used: DotRow and DotCell
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
   *      - setInterval every x milliseconds, select an inactive coord from list of inactive coordinates.
   *        - Set coordToDeactivate state to the selected inactive coord.
   *        - remove the selected inactive coord from the list.
   *      - clearInterval once list of inactive coordinates is empty.
   *      2... via DotCell Component
   *      - create a useEffect that watches for changes in coordToDeactivate.
   *      - if the coord for the DotCell matches the coord in coordToDeactivate, change the styling to have the dot "dissapear" in the UI.
   */

  return (
    <div>
      <div className={styles.container}>
        {mappableDotMatrix().map((index: number) => (
          <div key={index} className={styles.dot} />
        ))}
      </div>
      <div className={styles.dot} />
      <hr />
      {string}
    </div>
  );
};

export default DisplayDotsAnimation;
