import { ISong } from "../../interfaces/audio-player/ISong";
import { shuffleArr } from "../../utils/common/shuffleArr";

export const rockPlaylist: ISong[] = shuffleArr([
  {
    title: "Daze 22.00",
    artist: "Flume",
    src: "https://user-images.githubusercontent.com/77861258/225471651-848a88fa-4396-4d58-9860-1c2dada37b18.webm",
  },
]);
