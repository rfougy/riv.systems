import { ISong } from "../../interfaces/audio-player/ISong";

export function getAudioControlsDict(currSongIndex: number, playlist: ISong[]) {
  return {
    firstSongIndex: 0,
    lastSongIndex: playlist.length - 1,
    get nextSongIndex() {
      return currSongIndex !== this.lastSongIndex
        ? currSongIndex + 1
        : this.firstSongIndex;
    },
    get prevSongIndex() {
      return currSongIndex !== this.firstSongIndex
        ? currSongIndex - 1
        : this.lastSongIndex;
    },
    get isFirstSong() {
      return currSongIndex === this.firstSongIndex;
    },
    get isLastSong() {
      return currSongIndex === this.lastSongIndex;
    },
  };
}
