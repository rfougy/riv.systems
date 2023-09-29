import { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  DropdownButton,
  Dropdown,
  PlaylistOption,
  Title,
} from "./Playlist.styled";
import ArrowIcon from "../../../icons/ArrowIcon";
import { IPlaylist } from "../../../../interfaces/audio-player/IPlaylist";
import { IAllPlaylists } from "../../../../interfaces/audio-player/IAllPlaylists";
import useOutsideClick from "../../../../hooks/useOutsideClick";

const Playlist: React.FC<{
  musicPlaylist: IAllPlaylists;
  selectedPlaylist: IPlaylist;
  setSelectedPlaylist: Dispatch<SetStateAction<IPlaylist>>;
}> = ({ musicPlaylist, selectedPlaylist, setSelectedPlaylist }) => {
  const [dropdownOpened, setDropdownOpened] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLUListElement | null>(null);

  const clickedOutside = useOutsideClick(dropdownRef, () =>
    setDropdownOpened(false)
  );

  const playlists: IPlaylist[] = Object.values(musicPlaylist).filter(
    (playlist) => playlist.title !== selectedPlaylist.title
  );

  function handleDropDownOptionClick(playlist: IPlaylist) {
    setSelectedPlaylist(playlist);
    setDropdownOpened(false);
  }

  function handleDropdownButtonClick() {
    clickedOutside ? null : setDropdownOpened((prev) => !prev);
  }

  return (
    <>
      <DropdownButton
        aria-label="Color Theme Toggle"
        onClick={() => handleDropdownButtonClick()}
      >
        <Title>{selectedPlaylist.title}</Title>
        <ArrowIcon
          aria-label="Arrow Icon"
          top={!dropdownOpened}
          bottom={dropdownOpened}
        />
      </DropdownButton>
      {dropdownOpened && (
        <Dropdown ref={dropdownRef}>
          {playlists.map((playlist: IPlaylist, index) => (
            <PlaylistOption
              key={index}
              onClick={() => handleDropDownOptionClick(playlist)}
            >
              <Title>{playlist.title}</Title>
            </PlaylistOption>
          ))}
        </Dropdown>
      )}
    </>
  );
};

export default Playlist;
