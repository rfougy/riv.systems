import { IAllPlaylists } from "../../interfaces/audio-player/IAllPlaylists";
import { electronicPlaylist } from "./electronicPlaylist";
import { japanesePlaylist } from "./japanesePlaylist";
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
  japanese: {
    title: "JAPANESE",
    playlist: japanesePlaylist,
  },
};
