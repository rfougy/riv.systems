import React, { useEffect, useState } from "react";
import { Howl } from "howler";

import IconButton from "../../shared/icon-button/IconButton";

import { musicPlaylist } from "../../../constants/musicPlaylist";
import { audioPlayerButtonDict } from "../../../dictionaries/audioPlayerButtonDict";

import { List } from "./AudioPlayer.styled";

export const AudioPlayer: React.FC = () => {
  const [howler, setHowler] = useState<Howl>();
  const [newHowlerCreated, setNewHowlerCreated] = useState<boolean>();
  const [currSongIndex, setCurrSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const { play, pause, nextSkip, prevSkip } = audioPlayerButtonDict;

  const firstSongIndex = 0;
  const lastSongIndex = musicPlaylist.length - 1;

  function initializeHowler(song: string): Howl {
    const howler = new Howl({
      src: [song],
    });
    return howler;
  }

  function handlePlay(): void {
    howler?.play();
    setIsPlaying(true);
  }

  function handlePause(): void {
    howler?.pause();
    setIsPlaying(false);
  }

  function handleNextSong(): void {
    const nextSongIndex: number =
      currSongIndex !== lastSongIndex ? currSongIndex + 1 : firstSongIndex;

    howler?.pause();
    skipToDiffSong(nextSongIndex);
  }

  function handlePrevSong(): void {
    const prevSongIndex: number =
      currSongIndex !== firstSongIndex ? currSongIndex - 1 : lastSongIndex;

    howler?.pause();
    skipToDiffSong(prevSongIndex);
  }

  function skipToDiffSong(songIndex: number) {
    setCurrSongIndex(songIndex);
    setHowler(undefined);
    setNewHowlerCreated(true);
  }

  /**
   * @description create new howler initialization when a) the component first initializes, and b) the song changes
   */
  useEffect((): void => {
    const currSong = musicPlaylist[currSongIndex].src;
    const newHowler: Howl = initializeHowler(currSong);
    setHowler(newHowler);
  }, [currSongIndex]);

  /**
   * @description automatically play the next/prev song given that the audio player was on play
   */
  useEffect((): void => {
    if (newHowlerCreated && howler && isPlaying) {
      howler.play();
      setNewHowlerCreated(false);
    }
  }, [newHowlerCreated, howler, isPlaying]);

  return (
    <List>
      <IconButton
        src={prevSkip.icon}
        alt={prevSkip.alt}
        ariaLabel={prevSkip.ariaLabel}
        onClick={(): void => handlePrevSong()}
      />
      <IconButton
        src={isPlaying ? pause.icon : play.icon}
        alt={isPlaying ? pause.alt : play.icon}
        ariaLabel={isPlaying ? pause.ariaLabel : play.ariaLabel}
        onClick={() => (isPlaying ? handlePause() : handlePlay())}
      />
      <IconButton
        src={nextSkip.icon}
        alt={nextSkip.alt}
        ariaLabel={nextSkip.ariaLabel}
        onClick={(): void => handleNextSong()}
      />
    </List>
  );
};
