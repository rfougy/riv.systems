import { displayDotsDictionary } from "../../dictionaries/displayDotsDictionary";
import IAllCoords from "../../interfaces/IAllCoords";
import "../../ext/string.extensions";
import { structuredClone } from "../../utils";
import _ from "lodash";

let charStartingXCoord: number = 0;

/**
 * @todo create tests and add descriptions + examples
 */
function getActiveCoordsForWord(word: string): number[][] {
  const charArr: string[] = word.split("");
  const dictionaryCharArr = charArr.map((char: string) => {
    const displayDotsDictionaryClone = structuredClone(displayDotsDictionary);
    const dictionaryChar =
      displayDotsDictionaryClone[char as keyof typeof displayDotsDictionary];

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
 * @description finds gap coords where the starting coord of a given row doesn't have xCoord of 0
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

function getStartEndXCoordsPerChar(string: string): number[][] {
  const charArr = string.split("");

  let startXCoord: number = 0;
  let endXCoord: number;
  let startEndXCoord: number[];

  const startEndXCoordsPerChar = charArr.map((char): number[] => {
    const displayDotsDictionaryClone = structuredClone(displayDotsDictionary);
    const dictionaryChar =
      displayDotsDictionaryClone[char as keyof typeof displayDotsDictionary];
    const dictionaryCharWidth = dictionaryChar.width - 1;

    endXCoord = startXCoord + dictionaryCharWidth;
    startEndXCoord = [startXCoord, endXCoord];
    startXCoord = startXCoord + dictionaryCharWidth + 1;

    return startEndXCoord;
  });

  return startEndXCoordsPerChar;
}

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
    groupedCoordsHashtable[key].allCoordsByRow = _.groupBy(
      groupedCoordsHashtable[key].allCoords,
      (coord) => coord[0]
    );
  }

  return groupedCoordsHashtable;
}

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

function isBetweenXCoordRangeHelper(
  coord: number[],
  startXCoord: number,
  endXCoord: number
) {
  return startXCoord <= coord[1] && coord[1] <= endXCoord;
}
