import { IAudioControlsButtonDict } from "../../interfaces/IAudioControlsButtonDict";

import playIcon from "../../public/assets/audio-player/audio-play-icon.svg";
import pauseIcon from "../../public/assets/audio-player/audio-pause-icon.svg";
import nextSkipIcon from "../../public/assets/audio-player/audio-next-skip-icon.svg";
import prevSkipIcon from "../../public/assets/audio-player/audio-prev-skip-icon.svg";

export const audioControlsButtonDict: IAudioControlsButtonDict = {
  play: {
    icon: playIcon,
    ariaLabel: "Play Button",
    alt: "Play Button Icon",
  },
  pause: {
    icon: pauseIcon,
    ariaLabel: "Pause Button",
    alt: "Pause Button Icon",
  },
  nextSkip: {
    icon: nextSkipIcon,
    ariaLabel: "Next Song Skip Button",
    alt: "Next Song Skip Button",
  },
  prevSkip: {
    icon: prevSkipIcon,
    ariaLabel: "Previous Song Skip Button",
    alt: "Previous Song Skip Button Icon",
  },
};
