import { IAllPlaylists } from "../../interfaces/audio-player/IAllPlaylists";
import { electronicPlaylist } from "./electronicPlaylist";
import { japaneseRockPlaylist } from "./japanesePlaylist";
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
    title: "JAPANESE ROCK",
    playlist: japaneseRockPlaylist,
  },
};
