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
   * Take into account that each letter's x coordinates will depend on the order they're in
   *
   * declare a variable where the value is a map through charArr. The result is an array with all dot locations.
   *
   * declare a variable where the value is a filter through the above variable. The reulst is an array of dot locations that ARE NOT characters, aka negative space.
   *
   * From there, create a function that will be used in JSX.
   * Function will be a setInterval,
   * 
   * Need to take into account words and flex wrapping...
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
