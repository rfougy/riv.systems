import { useState } from "react";
import { Box } from "./AudioPlayer.styled";
import { AudioControls } from "./audio-controls/AudioControls";
import Playlist from "./playlist/Playlist";
import { IPlaylist } from "../../../interfaces/audio-player/IPlaylist";
import { musicPlaylist } from "../../../constants/audio-player/musicPlaylist";

const AudioPlayer: React.FC = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState<IPlaylist>(
    musicPlaylist.electronic
  );

  return (
    <Box>
      <Playlist />
      <AudioControls />
    </Box>
  );
};

export default AudioPlayer;
