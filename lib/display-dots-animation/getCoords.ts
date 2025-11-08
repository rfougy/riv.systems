/**
 * Display Dots Animation - Coordinate Calculation Module
 * 
 * This module provides functions for converting text strings into coordinate-based
 * dot matrix representations. It handles:
 * - Character positioning and spacing
 * - Active and inactive coordinate calculation
 * - Gap detection between characters and words
 * - Coordinate grouping by character, word, and space
 * 
 * The coordinate system uses [y, x] format where:
 * - y: Row coordinate (0 = top row)
 * - x: Column coordinate (0 = leftmost column)
 * 
 * @module lib/display-dots-animation/getCoords
 */

import groupBy from "lodash/groupBy";
import "../../ext/string.extensions";

import { displayDotsDict } from "../../constants/dictionaries/displayDotsDict";
import { structuredClone } from "../../utils/common/structuredClone";

import IAllCoords from "../../interfaces/IAllCoords";

let charStartingXCoord: number = 0;

/**
 * Calculates active coordinates for a single word by positioning each character
 * horizontally and offsetting coordinates based on character width.
 * 
 * @param word - The word to process (should be uppercase)
 * @returns Array of coordinate arrays for active dots in the word
 * 
 * @example
 * getActiveCoordsForWord("HI")
 * // Returns coordinates for 'H' and 'I' positioned side by side
 * // [[0,0], [0,3], [1,0], [1,3], ...] (H coordinates)
 * // [[0,5], [0,6], [0,7], [1,6], ...] (I coordinates offset by H's width)
 */
function getActiveCoordsForWord(word: string): number[][] {
  const charArr: string[] = word.split("");
  const dictionaryCharArr = charArr.map((char: string) => {
    const displayDotsDictClone = structuredClone(displayDotsDict);
    const dictionaryChar =
      displayDotsDictClone[char as keyof typeof displayDotsDict];

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

  charStartingXCoord += 1; // adding empty space for next word.

  return activeCoords;
}

/**
 * Calculates all coordinates (active and inactive) for a given string.
 * Active coordinates form the visible text, while inactive coordinates
 * represent empty spaces and gaps that will be animated.
 * 
 * @param string - The text string to process (automatically uppercased)
 * @returns Object containing allCoords, activeCoords, and inactiveCoords
 * 
 * @example
 * getAllCoords("HI")
 * // Returns:
 * // {
 * //   allCoords: [[0,0], [0,1], [0,2], [0,3], [0,4], [0,5], ...],
 * //   activeCoords: [[0,0], [0,3], [1,0], [1,3], ...],
 * //   inactiveCoords: [[0,1], [0,2], [0,4], ...]
 * // }
 */
function getAllCoords(string: string): IAllCoords {
  const wordsArr: string[] = string.toUpperCase().split(" ");

  const activeCoordsGrouped: number[][][] = wordsArr.reduce(
    (output: any[], word: string, index: number) => {
      const activeCoordsForWord = getActiveCoordsForWord(word);
      output.push(...activeCoordsForWord);

      if (index === wordsArr.length - 1) charStartingXCoord = 0;

      return output;
    },
    []
  );

  const activeCoords: number[][] = activeCoordsGrouped.flat(1).sortCoords();

  const allCoords = [];

  for (let i = 0; i < activeCoords.length; i++) {
    const prevCoord: number[] = activeCoords[i - 1];
    const currCoord: number[] = activeCoords[i];
    const nextCoord: number[] = activeCoords[i + 1];
    const maxXCoord: number = activeCoords[activeCoords.length - 1][1];

    const conditionals = {
      currYCoordNotInAllCoords:
        prevCoord &&
        activeCoordsGrouped[0].includes(currCoord) && // currCoord is included in first word of the string
        prevCoord[0] !== currCoord[0], // yCoord of currCoord is not included in allCoords
      currCoordInFirstWord:
        !prevCoord && activeCoordsGrouped[0].includes(currCoord),
      currAndNextCoordsInSameRowWithGap:
        nextCoord &&
        currCoord[0] === nextCoord[0] && // currCoord and nextCoord are on same row
        nextCoord[1] - currCoord[1] > 1, // there is a gap between currCoord and nextCoord
      currAndNextCoordsInDiffRowWithGap:
        nextCoord &&
        currCoord[0] !== nextCoord[0] && // currCoord and nextCoord are on different rows
        maxXCoord - currCoord[1] > 1, // there is a gap between currXCoord and maxXCoord
    };

    let inactiveCoords: number[][];

    if (
      conditionals.currYCoordNotInAllCoords ||
      conditionals.currCoordInFirstWord
    ) {
      inactiveCoords = getPrecGapCoordsHelper(currCoord);
      allCoords.push(...inactiveCoords);
    }

    allCoords.push(currCoord);

    if (conditionals.currAndNextCoordsInSameRowWithGap) {
      inactiveCoords = getProcGapCoordsHelper(currCoord, nextCoord[1]);
      allCoords.push(...inactiveCoords);
    }

    if (conditionals.currAndNextCoordsInDiffRowWithGap) {
      inactiveCoords = getProcGapCoordsHelper(currCoord, maxXCoord, true);
      allCoords.push(...inactiveCoords);
    }
  }

  const inactiveCoords: number[][] = allCoords
    .filter((coord) => !activeCoords.includes(coord))
    .sortCoords();

  return { allCoords: allCoords.sortCoords(), activeCoords, inactiveCoords };
}

/**
 * Finds gap coordinates preceding a coordinate where the starting coordinate
 * of a given row doesn't have xCoord of 0. These are the empty dots before
 * the first character in a row.
 * 
 * @param currCoord - The current coordinate [y, x]
 * @returns Array of gap coordinates from x=0 to x=currCoord[1]-1
 * 
 * @example
 * getPrecGapCoordsHelper([2, 5])
 * // Returns: [[2, 4], [2, 3], [2, 2], [2, 1], [2, 0]]
 * // (all coordinates on row 2 from x=0 to x=4)
 */
function getPrecGapCoordsHelper(currCoord: number[]) {
  const gapCoords: number[][] = [];
  let xCoordGap = currCoord[1];

  while (xCoordGap !== 0) {
    const gapCoord = [currCoord[0], xCoordGap - 1];
    gapCoords.push(gapCoord);
    xCoordGap--;
  }

  return gapCoords;
}

/**
 * Finds gap coordinates proceeding (after) a coordinate. These are the empty
 * dots between characters or at the end of rows.
 * 
 * @param currCoord - The current coordinate [y, x]
 * @param largerXCoord - The larger X coordinate to fill up to
 * @param isMaxXCoord - If true, fills to maxXCoord; if false, fills to largerXCoord-1
 * @returns Array of gap coordinates between currCoord and largerXCoord
 * 
 * @example
 * getProcGapCoordsHelper([2, 2], 5, false)
 * // Returns: [[2, 3], [2, 4]]
 * // (coordinates on row 2 from x=3 to x=4)
 * 
 * getProcGapCoordsHelper([2, 2], 10, true)
 * // Returns: [[2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9], [2, 10]]
 * // (coordinates on row 2 from x=3 to x=10)
 */
function getProcGapCoordsHelper(
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

/**
 * Calculates the start and end X coordinates for each character in a string.
 * Used to determine the X-coordinate range for grouping coordinates by character.
 * 
 * @param string - The text string to process
 * @returns Array of [startX, endX] coordinate pairs, one for each character
 * 
 * @example
 * getStartEndXCoordsPerChar("HI")
 * // Returns: [[0, 4], [5, 8]]
 * // 'H' spans from x=0 to x=4 (width 5)
 * // 'I' spans from x=5 to x=8 (width 4, accounting for spacing)
 */
function getStartEndXCoordsPerChar(string: string): number[][] {
  const charArr = string.split("");

  let startXCoord: number = 0;
  let endXCoord: number;
  let startEndXCoord: number[];

  const startEndXCoordsPerChar = charArr.map((char): number[] => {
    const displayDotsDictClone = structuredClone(displayDotsDict);
    const dictionaryChar =
      displayDotsDictClone[char as keyof typeof displayDotsDict];
    const dictionaryCharWidth = dictionaryChar.width - 1;

    endXCoord = startXCoord + dictionaryCharWidth;
    startEndXCoord = [startXCoord, endXCoord];
    startXCoord = startXCoord + dictionaryCharWidth + 1;

    return startEndXCoord;
  });

  return startEndXCoordsPerChar;
}

/**
 * Groups coordinates by individual character. Each character gets its own
 * coordinate group including active dots, inactive dots, and row groupings.
 * 
 * @param string - The text string to process
 * @returns Hashtable where keys are character X-coordinate ranges (e.g., "0-4")
 *          and values contain allCoords, allCoordsByRow, activeCoords, and inactiveCoords
 * 
 * @example
 * groupCoordsByChar("HI")
 * // Returns:
 * // {
 * //   "0-4": {
 * //     allCoords: [[0,0], [0,1], [0,3], ...],
 * //     allCoordsByRow: { 0: [[0,0], [0,3]], 1: [[1,0], [1,3]], ... },
 * //     activeCoords: [[0,0], [0,3], [1,0], [1,3], ...],
 * //     inactiveCoords: [[0,1], [0,2], [0,4], ...]
 * //   },
 * //   "5-8": { ... } // 'I' character
 * // }
 */
export function groupCoordsByChar(string: string) {
  const { allCoords, activeCoords, inactiveCoords }: IAllCoords =
    getAllCoords(string);
  const startEndXCoords = getStartEndXCoordsPerChar(string);

  const groupedCoordsHashtable = startEndXCoords.reduce(
    (ht: any, coord: number[]) => {
      const coordAsKey = coord.join("-");
      ht[coordAsKey] = {
        allCoords: [],
        allCoordsByRow: [],
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

      if (coordInRange && activeCoords.includes(coord)) {
        groupedCoordsHashtable[coordAsKey].allCoords.push(coord);
        groupedCoordsHashtable[coordAsKey].activeCoords.push(coord);
      }

      if (coordInRange && inactiveCoords.includes(coord)) {
        groupedCoordsHashtable[coordAsKey].allCoords.push(coord);
        groupedCoordsHashtable[coordAsKey].inactiveCoords.push(coord);
      }
    });
  });

  for (let key in groupedCoordsHashtable) {
    groupedCoordsHashtable[key].allCoordsByRow = groupBy(
      groupedCoordsHashtable[key].allCoords,
      (coord) => coord[0]
    );
  }

  return groupedCoordsHashtable;
}

/**
 * Groups coordinates by words and spaces, maintaining the structure of the
 * original text. This allows rendering to preserve word boundaries and spacing.
 * 
 * @param string - The text string to process
 * @returns Array of arrays, where each inner array represents a word or space group.
 *          Word groups contain character coordinate groups, space groups contain
 *          only inactive coordinates.
 * 
 * @example
 * groupCoordsByWordAndSpace("HI THERE")
 * // Returns:
 * // [
 * //   [charGroupH, charGroupI],  // "HI" word
 * //   [spaceGroup],               // " " space
 * //   [charGroupT, charGroupH, charGroupE, charGroupR, charGroupE]  // "THERE" word
 * // ]
 */
export function groupCoordsByWordAndSpace(string: string) {
  const groupedCoordsByChar = Object.values(groupCoordsByChar(string));

  const groupedCoordsByWord: any[] = [];
  let groupedWord: any[] = [];

  groupedCoordsByChar.map((coordGroup: any, index: number) => {
    const isWhiteSpace: boolean = !coordGroup.activeCoords.length;
    const isLastCoordGroupInArr: boolean =
      index === groupedCoordsByChar.length - 1;

    if (!isWhiteSpace && isLastCoordGroupInArr) {
      groupedWord.push(coordGroup);
      groupedCoordsByWord.push(groupedWord);
      return;
    }

    if (!isWhiteSpace) {
      groupedWord.push(coordGroup);
      return;
    }

    if (isWhiteSpace) {
      groupedCoordsByWord.push(groupedWord);
      groupedCoordsByWord.push([coordGroup]);
      groupedWord = [];
      return;
    }
  });

  return groupedCoordsByWord;
}

/**
 * Helper function to check if a coordinate's X value falls within a given range.
 * Used to determine which character a coordinate belongs to.
 * 
 * @param coord - The coordinate to check [y, x]
 * @param startXCoord - The start X coordinate of the range (inclusive)
 * @param endXCoord - The end X coordinate of the range (inclusive)
 * @returns True if coord[1] is between startXCoord and endXCoord (inclusive)
 * 
 * @example
 * isBetweenXCoordRangeHelper([2, 3], 0, 4)
 * // Returns: true (3 is between 0 and 4)
 * 
 * isBetweenXCoordRangeHelper([2, 5], 0, 4)
 * // Returns: false (5 is not between 0 and 4)
 */
function isBetweenXCoordRangeHelper(
  coord: number[],
  startXCoord: number,
  endXCoord: number
) {
  return startXCoord <= coord[1] && coord[1] <= endXCoord;
}
