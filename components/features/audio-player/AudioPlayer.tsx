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
      <Playlist
        musicPlaylist={musicPlaylist}
        selectedPlaylist={selectedPlaylist}
        setSelectedPlaylist={setSelectedPlaylist}
      />
      <AudioControls selectedPlaylist={selectedPlaylist} />
    </Box>
  );
};

export default AudioPlayer;
