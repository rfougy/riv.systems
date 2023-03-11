import React, { useEffect, useState } from "react";
import { Howl } from "howler";

import AudioSample01 from "../../../public/audio/music/audio-player-sample-1.mp3";
import AudioSample02 from "../../../public/audio/music/audio-player-sample-2.mp3";
import { Container } from "./AudioPlayer.styled";

const playlist = [AudioSample01, AudioSample02];

export const AudioPlayer: React.FC = () => {
  const [currSongIndex, setCurrSongIndex] = useState<number>(0);
  const [howler, setHowler] = useState<Howl>(
    initializeHowler(playlist[currSongIndex])
  );

  function initializeHowler(song: string): Howl {
    const howler = new Howl({
      src: [song],
    });

    return howler;
  }

  function handleNextSong() {
    howler.pause();
    setCurrSongIndex(currSongIndex + 1);
  }

  function handlePrevSong() {
    howler.pause();
    setCurrSongIndex(currSongIndex - 1);
  }

  useEffect(() => {
    const newHowler = initializeHowler(playlist[currSongIndex]);
    setHowler(newHowler);
  }, [currSongIndex]);

  return (
    <Container>
      <div onClick={() => howler.play()}>PLAY</div>
      <div onClick={() => howler.pause()}>PAUSE</div>
      <div onClick={() => handleNextSong()}>SKIP FORWARD</div>
      <div onClick={() => handlePrevSong()}>SKIP BACKWARD</div>
    </Container>
  );
};
