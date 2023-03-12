import React, { useEffect, useState } from "react";
import { Howl } from "howler";

import { musicPlaylist } from "../../../constants/musicPlaylist";

import { Container } from "./AudioPlayer.styled";

export const AudioPlayer: React.FC = () => {
  const [howler, setHowler] = useState<Howl>();
  const [newHowlerCreated, setNewHowlerCreated] = useState<boolean>();
  const [currSongIndex, setCurrSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

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
      currSongIndex !== musicPlaylist.length - 1 ? currSongIndex + 1 : 0;

    howler?.pause();
    setCurrSongIndex(nextSongIndex);
    setHowler(undefined);
    setNewHowlerCreated(true);
  }

  function handlePrevSong(): void {
    const prevSongIndex: number =
      currSongIndex !== 0 ? currSongIndex - 1 : musicPlaylist.length - 1;

    howler?.pause();
    setCurrSongIndex(prevSongIndex);
    setHowler(undefined);
    setNewHowlerCreated(true);
  }

  /**
   * @description create new howler initialization when a) the component first initialies, and b) the song changes
   */
  useEffect((): void => {
    const currSong = musicPlaylist[currSongIndex];
    const newHowler: Howl = initializeHowler(currSong);
    setHowler(newHowler);
  }, [currSongIndex]);

  /**
   * @description automatically play the next/prev song given that the audio player was on play
   */
  useEffect((): void => {
    if (newHowlerCreated && howler && isPlaying) howler.play();
  }, [newHowlerCreated, howler, isPlaying]);

  return (
    <Container>
      <div onClick={(): void => (isPlaying ? handlePause() : handlePlay())}>
        {isPlaying ? "PAUSE" : "PLAY"}
      </div>
      <div onClick={(): void => handleNextSong()}>SKIP FORWARD</div>
      <div onClick={(): void => handlePrevSong()}>SKIP BACKWARD</div>
    </Container>
  );
};
