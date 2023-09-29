import { IAllPlaylists } from "../../interfaces/audio-player/IAllPlaylists";
import { shuffleArr } from "../../utils/common/shuffleArr";
import { electronicPlaylist } from "./electronicPlaylist";
import { japaneseRockPlaylist } from "./japaneseRockPlaylist";
import { rockPlaylist } from "./rockPlaylist";

export const musicPlaylist: IAllPlaylists = {
  electronic: {
    title: "ELECTRONIC",
    playlist: electronicPlaylist,
  },
  rock: {
    title: "ROCK",
    playlist: rockPlaylist,
  },
  japaneseRock: {
    title: "J-ROCK",
    playlist: japaneseRockPlaylist,
  },
  random: {
    title: "RANDOM",
    playlist: shuffleArr([
      ...electronicPlaylist,
      ...rockPlaylist,
      ...japaneseRockPlaylist,
    ]),
  },
};
