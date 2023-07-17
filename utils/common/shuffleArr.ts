/**
 * @description shuffled the values within an array, primarily used for shuffling inactiveCoords for context.
 * @see https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
export function shuffleArr(arr: any[]): any[] {
  let currIdx: number = arr.length,
    randomIdx;

  while (currIdx != 0) {
    randomIdx = Math.floor(Math.random() * currIdx);
    currIdx--;

    [arr[currIdx], arr[randomIdx]] = [arr[randomIdx], arr[currIdx]];
  }

  return arr;
}
