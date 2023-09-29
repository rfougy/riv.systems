import { useEffect, useState } from "react";
import { Howl } from "howler";

import IconButton from "../../../shared/icon-button/IconButton";

import { audioControlsButtonDict } from "../../../../constants/dictionaries/audioControlsButtonDict";

import { List } from "./AudioControls.styled";
import { IPlaylist } from "../../../../interfaces/audio-player/IPlaylist";
import { getAudioControlsDict } from "../../../../utils/audio-player/getAudioControlsDict";

export const AudioControls: React.FC<{ selectedPlaylist: IPlaylist }> = ({
  selectedPlaylist,
}) => {
  const [howler, setHowler] = useState<Howl>();
  const [howlerInit, setHowlerInit] = useState<boolean>();
  const [currPlaylist, setCurrPlaylist] = useState<string>(
    selectedPlaylist.title
  );
  const [currSongIndex, setCurrSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const { play, pause, nextSkip, prevSkip } = audioControlsButtonDict;
  const { playlist } = selectedPlaylist;

  const {
    firstSongIndex,
    nextSongIndex,
    prevSongIndex,
    isFirstSong,
    isLastSong,
  } = getAudioControlsDict(currSongIndex, playlist);

  const isNewPlaylist = currPlaylist !== selectedPlaylist.title;

  function initializeHowler(songIndex: number): Howl {
    const song = playlist[songIndex].src;
    const howler = new Howl({
      src: [song],
      html5: true,
      onend: () => skipToDiffSong(!isLastSong ? songIndex + 1 : firstSongIndex),
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
    howler?.pause();
    skipToDiffSong(nextSongIndex);
  }

  function handlePrevSong(): void {
    howler?.pause();
    skipToDiffSong(prevSongIndex);
  }

  function skipToDiffSong(songIndex: number) {
    setCurrSongIndex(songIndex);
    setHowler(undefined);
    setHowlerInit(true);
  }

  /**
   * @description create new howler initialization when a) the component first initializes, and b) the song changes
   */
  useEffect((): void => {
    if (!isNewPlaylist) {
      const newHowler: Howl = initializeHowler(currSongIndex);
      setHowler(newHowler);
    }
  }, [currSongIndex, currPlaylist]);

  /**
   * @description automatically play the next/prev song given that the audio player was on play
   */
  useEffect((): void => {
    if (howlerInit && howler && isPlaying) {
      howler.play();
      setHowlerInit(false);
    }
  }, [howlerInit, howler, isPlaying]);

  /**
   * @description set new song and playlist
   */
  useEffect((): void => {
    setCurrPlaylist(selectedPlaylist.title);
    setCurrSongIndex(0);
  }, [selectedPlaylist]);

  /**
   * @description change current song on playlist change
   */
  useEffect(() => {
    if (isNewPlaylist) {
      howler?.unload();
      skipToDiffSong(0);
    }
  }, [isNewPlaylist]);

  return (
    <List>
      <IconButton
        src={prevSkip.icon}
        alt={prevSkip.alt}
        ariaLabel={prevSkip.ariaLabel}
        isDisabled={isFirstSong}
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
