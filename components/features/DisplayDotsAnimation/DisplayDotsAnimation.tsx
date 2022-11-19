import styles from "./DisplayDotsAnimation.module.css";
import { displayDotsDictionary } from "../../../dictionaries/displayDotsDictionary";
import { useEffect } from "react";
import "../../../ext/string.extensions";
import _ from "lodash";

interface IAllCoords {
  allCoords: number[][];
  activeCoords: number[][];
  inactiveCoords: number[][];
}

const DisplayDotsAnimation: React.FC<{ string?: string }> = ({
  string = "EE EE",
}) => {
  const wordsArr: string[] = string.toUpperCase().split(" "); // Step 1

  let charStartingXCoord: number = 0;

  function getActiveCoordsForWord(word: string): number[][] {
    const charArr: string[] = word.split("");
    const dictionaryCharArr = charArr.map((char: string) => {
      const displayDotsDictionaryClone = structuredClone(displayDotsDictionary);
      const dictionaryChar = displayDotsDictionaryClone[char];

      return dictionaryChar;
    });

    const activeCoords = dictionaryCharArr.map((dictionaryChar: any) => {
      let newCoords;

      if (dictionaryChar.coordinates !== null) {
        newCoords = structuredClone(dictionaryChar.coordinates);
        newCoords.map((coordinate: number[]) => {
          coordinate[1] += charStartingXCoord;
        });

        dictionaryChar.coordinates = newCoords;
      }

      charStartingXCoord += dictionaryChar.width;

      return dictionaryChar.coordinates;
    });

    charStartingXCoord += 2; // adding empty space for next word.

    return activeCoords;
  }

  function getAllCoords(string: string): IAllCoords {
    const wordsArr: string[] = string.toUpperCase().split(" ");

    const activeCoordsGrouped: number[][][] = wordsArr.reduce(
      (output: any[], word: string) => {
        const activeCoordsForWord = getActiveCoordsForWord(word);
        output.push(...activeCoordsForWord);
        return output;
      },
      []
    );

    const activeCoords: number[][] = activeCoordsGrouped.flat(1).sortCoords();

    const allCoords = [];

    for (let i = 0; i < activeCoords.length; i++) {
      const currCoord = activeCoords[i];
      const nextCoord = activeCoords[i + 1];
      const maxXCoord = activeCoords[activeCoords.length - 1][1];

      allCoords.push(currCoord);

      if (
        nextCoord &&
        currCoord[0] === nextCoord[0] &&
        nextCoord[1] - currCoord[1] > 1
      ) {
        const inactiveCoords = getGapCoordsHelper(currCoord, nextCoord[1]);
        allCoords.push(...inactiveCoords);
      }

      if (
        nextCoord &&
        currCoord[0] !== nextCoord[0] &&
        maxXCoord - currCoord[1] > 1
      ) {
        const inactiveCoords = getGapCoordsHelper(currCoord, maxXCoord, true);
        allCoords.push(...inactiveCoords);
      }
    }

    const inactiveCoords: number[][] = allCoords
      .filter((coord) => !activeCoords.includes(coord))
      .sortCoords();

    return { allCoords: allCoords.sortCoords(), activeCoords, inactiveCoords };
  }

  function getGapCoordsHelper(
    currCoord: number[],
    largerXCoord: number,
    isMaxXCoord?: boolean
  ): number[][] {
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

  function getStartEndXCoordsPerChar(string: string): number[][] {
    const charArr = string.split("");

    let startXCoord: number = 0;
    let endXCoord: number;
    let startEndXCoord: number[];

    const startEndXCoordsPerChar = charArr.map((char): number[] => {
      const displayDotsDictionaryClone = structuredClone(displayDotsDictionary);
      const dictionaryChar = displayDotsDictionaryClone[char];
      const dictionaryCharWidth = isWhiteSpaceHelper(char)
        ? dictionaryChar.width
        : dictionaryChar.width - 1;

      endXCoord = startXCoord + dictionaryCharWidth;
      startEndXCoord = [startXCoord, endXCoord];
      startXCoord = startXCoord + dictionaryCharWidth + 1;

      return startEndXCoord;
    });

    return startEndXCoordsPerChar;
  }

  function isWhiteSpaceHelper(char: string) {
    return /\s/.test(char);
  }

  function groupCoords(string: string) {
    const { allCoords, activeCoords, inactiveCoords }: IAllCoords =
      getAllCoords(string);
    const startEndXCoords = getStartEndXCoordsPerChar(string);

    const groupedCoordsHashtable = startEndXCoords.reduce(
      (ht: any, coord: number[]) => {
        const coordAsKey = coord.join("-");
        ht[coordAsKey] = {
          allCoords: [],
          activeCoords: [],
          inactiveCoords: [],
        };
        return ht;
      },
      {}
    );

    allCoords.map((coord: number[]) => {
      startEndXCoords.map((startEndXCoord) => {
        const startXCoord = startEndXCoord[0];
        const endXCoord = startEndXCoord[1];
        const coordAsKey = startEndXCoord.join("-");

        const coordInRange: boolean = isBetweenXCoordRangeHelper(
          coord,
          startXCoord,
          endXCoord
        );

        if (coordInRange) {
          groupedCoordsHashtable[coordAsKey].allCoords.push(coord);
        }

        if (coordInRange && activeCoords.includes(coord)) {
          groupedCoordsHashtable[coordAsKey].activeCoords.push(coord);
        }

        if (coordInRange && inactiveCoords.includes(coord)) {
          groupedCoordsHashtable[coordAsKey].inactiveCoords.push(coord);
        }
      });
    });

    return groupedCoordsHashtable;
  }

  function isBetweenXCoordRangeHelper(
    coord: number[],
    startXCoord: number,
    endXCoord: number
  ) {
    return startXCoord <= coord[1] && coord[1] <= endXCoord;
  }

  const result = groupCoords(string);

  useEffect(() => {
    console.log("result: ", result);
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
