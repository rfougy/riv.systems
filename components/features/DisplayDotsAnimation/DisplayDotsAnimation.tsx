import styles from "./DisplayDotsAnimation.module.css";
import { displayDotsDictionary } from "../../../dictionaries/displayDotsDictionary";
import { useEffect } from "react";

const DisplayDotsAnimation: React.FC<{ string?: string }> = ({
  string = "EE E",
}) => {
  const wordsArr: string[] = string.toUpperCase().split(" "); // Step 1

  let charStartingXCoordPosition: number = 0;
  let maxXCoordForStr: number = 0;
  let maxYCoordForStr: number = 0;

  function getActiveDotCoords(charArr: string[]) {
    const activeDotCoords = charArr.map((char: string, index: number) => {
      const displayDotsDictionaryClone = structuredClone(displayDotsDictionary);
      const dictionaryChar = displayDotsDictionaryClone[char];

      let newCoords;

      if (dictionaryChar.coordinates !== null) {
        newCoords = structuredClone(dictionaryChar.coordinates);

        newCoords.map((coordinate: number[]) => {
          coordinate[1] += charStartingXCoordPosition;
        });

        dictionaryChar.coordinates = newCoords;
      }

      charStartingXCoordPosition +=
        index === charArr.lastIndexOf(char)
          ? dictionaryChar.width + 1 // Step 2a
          : dictionaryChar.width;

      return dictionaryChar.coordinates;
    });

    return activeDotCoords;
  }

  function getAllDotCoordinates(activeDotCoords: number[][]) {
    const allDotCoords = [];

    for (let i = 0; i < activeDotCoords.length; i++) {
      const currCoord = activeDotCoords[i];
      const nextCoord = activeDotCoords[i + 1];
      const maxXCoord = activeDotCoords[activeDotCoords.length - 1][1];

      allDotCoords.push(currCoord);

      if (
        nextCoord &&
        currCoord[0] === nextCoord[0] &&
        nextCoord[1] - currCoord[1] > 1
      ) {
        const inactiveCoords = getGapCoords(currCoord, nextCoord[1]);
        allDotCoords.push(...inactiveCoords);
        console.log("MATCH");
      }

      if (
        nextCoord &&
        currCoord[0] !== nextCoord[0] &&
        maxXCoord - currCoord[1] > 1
      ) {
        console.log(
          `${maxXCoord} minus ${currCoord[1]} = ${maxXCoord - currCoord[1]}`
        );
        const inactiveCoords = getGapCoords(currCoord, maxXCoord, true);
        allDotCoords.push(...inactiveCoords);
      }
    }

    return allDotCoords;
  }

  function getGapCoords(
    currCoord: number[],
    largerXCoord: number,
    isMaxXCoord?: boolean
  ) {
    let xCoordGap: number = isMaxXCoord
      ? largerXCoord - currCoord[1]
      : largerXCoord - currCoord[1] - 1;
    const gapCoords: number[][] = [];

    while (xCoordGap) {
      const currCoordCopy = currCoord.slice();
      const gapCoord = [currCoordCopy[0], currCoordCopy[1] + xCoordGap];
      gapCoords.push(gapCoord);
      xCoordGap--;
    }

    return gapCoords;
  }
  /**
   * @todo Create custom builtin method to replace sorting method
  */ 
  const activeDotCoords = wordsArr
    .reduce(
      // Step 2
      (output: any[], word: string) => {
        const charArr: string[] = word.split("");
        const activeDotCoordsForWord = getActiveDotCoords(charArr);
        output.push(...activeDotCoordsForWord);
        return output;
      },
      []
    )
    .flat(1) // Step 2b
    .sort(function (a, b) {
      if (a[0] == b[0]) {
        return a[1] - b[1];
      }
      return a[0] - b[0];
    });

  const allDotCoords = getAllDotCoordinates(activeDotCoords).sort(function (
    a,
    b
  ) {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  const inactiveDotCoords = allDotCoords
    .filter((coord) => !activeDotCoords.includes(coord))
    .sort(function (a, b) {
      if (a[0] == b[0]) {
        return a[1] - b[1];
      }
      return a[0] - b[0];
    });

  useEffect(() => {
    console.log("activeDotCoords: ", activeDotCoords);
    console.log("allDotCoords: ", allDotCoords);
    console.log("inactiveDotCoords: ", inactiveDotCoords);
  });

  /**
   *
   * declare a variable where the value is a filter through the above variable. The result is an array of inactive coordinates, aka negative space.
   *
   * Need to take into account words and flex wrapping...
   * [X] 1. split the string into an array of words
   * [X] 2. map through each word and get active dot coordinates;
   * [X]   a. add 1 extra width to totalWidth (aka charStartingXCoordPosition) to account for missing spaces inbetween words.
   * [X]   b. after mapping, flatten array (Ex. [[[0,1], [0,2]], [[1,1], [2,2]]] --> [[0,1], [0,2], [1,1], [2,2]]).
   * [X] 3. create list of inactive dot coordinates that references the flattened array.
   * [X] 4. create list 'mergedList' that merges both active and inactive coordinate lists.
   *    a. the general idea is to reference coordinates in mergedList, then group them by width
   *      i. Ex. word has max xcoord of 4, group coordinates with max xcoord 4).
   *    b. after/while grouping, sort coordinates in each group in ascending order (Ex. [0,0] [0,1] [0,2] [1,0] ...)
   *      i. *Note: is there a built-in method that can sort mergedList?
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
