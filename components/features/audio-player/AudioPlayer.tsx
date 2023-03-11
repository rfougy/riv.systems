import React from "react";
import { Howl } from "howler";

import AudioSample01 from "../../../public/audio/music/audio-player-sample-1.mp3";
import AudioSample02 from "../../../public/audio/music/audio-player-sample-2.mp3";
import { Container } from "./AudioPlayer.styled";

export const AudioPlayer: React.FC = () => {
  const howler = new Howl({
    src: [AudioSample01, AudioSample02],
  });

  return (
    <Container>
      <div
        onClick={() => {
          console.log("PLAYING");
          howler.play();
        }}
      >
        PLAY
      </div>
      <div
        onClick={() => {
          console.log("PAUSED");
          howler.pause();
        }}
      >
        PAUSE
      </div>
    </Container>
  );
};
