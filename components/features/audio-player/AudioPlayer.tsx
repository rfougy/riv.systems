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

  function initializeHowler(song: string): Howl {
    const howler = new Howl({
      src: [song],
      html5: true,
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
   * @description create new howler initialization when a) the component first initializes, and b) the song changes
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
