import { Box } from "./AudioPlayer.styled";
import { AudioControls } from "./audio-controls/AudioControls";
import Playlist from "./playlist/Playlist";

const AudioPlayer: React.FC = () => (
  <Box>
    <Playlist />
    <AudioControls />
  </Box>
);

export default AudioPlayer;
