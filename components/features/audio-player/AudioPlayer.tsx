import React, { useEffect, useState } from "react";
import { Howl } from "howler";

import { musicPlaylist } from "../../../constants/musicPlaylist";

import { Container } from "./AudioPlayer.styled";

export const AudioPlayer: React.FC = () => {
  const [currSongIndex, setCurrSongIndex] = useState<number>(0);

  const howlerInit = initializeHowler(musicPlaylist[currSongIndex]);
  const [howler, setHowler] = useState<Howl>(howlerInit);

  function initializeHowler(song: string): Howl {
    const howler = new Howl({
      src: [song],
    });

    return howler;
  }

  function handlePlay() {
    howler?.play();
  }

  function handlePause() {
    howler?.pause();
  }

  function handleNextSong(): void {
    const nextSongIndex =
      currSongIndex !== musicPlaylist.length - 1 ? currSongIndex + 1 : 0;

    howler?.pause();
    setCurrSongIndex(nextSongIndex);
  }

  function handlePrevSong(): void {
    const prevSongIndex =
      currSongIndex !== 0 ? currSongIndex - 1 : musicPlaylist.length - 1;

    howler?.pause();
    setCurrSongIndex(prevSongIndex);
  }

  useEffect((): void => {
    const newHowler = initializeHowler(musicPlaylist[currSongIndex]);
    setHowler(newHowler);
  }, [currSongIndex]);

  return (
    <Container>
      <div onClick={(): void => handlePlay()}>PLAY</div>
      <div onClick={(): void => handlePause()}>PAUSE</div>
      <div onClick={(): void => handleNextSong()}>SKIP FORWARD</div>
      <div onClick={(): void => handlePrevSong()}>SKIP BACKWARD</div>
    </Container>
  );
};
