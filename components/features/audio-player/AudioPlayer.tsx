import React, { useEffect, useState } from "react";
import { Howl } from "howler";

import { musicPlaylist } from "../../../constants/musicPlaylist";

import { Container } from "./AudioPlayer.styled";

export const AudioPlayer: React.FC = () => {
  const [howler, setHowler] = useState<Howl>();
  const [newHowlerCreated, setNewHowlerCreated] = useState<boolean>();
  const [currSongIndex, setCurrSongIndex] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);

  function initializeHowler(song: string): Howl {
    const howler = new Howl({
      src: [song],
    });
    return howler;
  }

  function handlePlay() {
    howler?.play();
    setPlaying(true);
  }

  function handlePause() {
    howler?.pause();
    setPlaying(false);
  }

  function handleNextSong(): void {
    const nextSongIndex =
      currSongIndex !== musicPlaylist.length - 1 ? currSongIndex + 1 : 0;

    howler?.pause();
    setCurrSongIndex(nextSongIndex);
    setHowler(undefined);
    setNewHowlerCreated(true);
  }

  function handlePrevSong(): void {
    const prevSongIndex =
      currSongIndex !== 0 ? currSongIndex - 1 : musicPlaylist.length - 1;

    howler?.pause();
    setCurrSongIndex(prevSongIndex);
    setHowler(undefined);
    setNewHowlerCreated(true);
  }

  /**
   * @description create new howler initialization when the song changes
   */
  useEffect((): void => {
    const newHowler = initializeHowler(musicPlaylist[currSongIndex]);
    setHowler(newHowler);
  }, [currSongIndex]);

  /**
   * @description play the next/prev song autmatically given that the prev song was still playing
   */
  useEffect(() => {
    if (newHowlerCreated && howler && playing) howler.play();
  }, [newHowlerCreated, howler, playing]);

  return (
    <Container>
      <div onClick={(): void => handlePlay()}>PLAY</div>
      <div onClick={(): void => handlePause()}>PAUSE</div>
      <div onClick={(): void => handleNextSong()}>SKIP FORWARD</div>
      <div onClick={(): void => handlePrevSong()}>SKIP BACKWARD</div>
    </Container>
  );
};
