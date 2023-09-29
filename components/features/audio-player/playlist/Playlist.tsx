import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Box, Dropdown, PlaylistOption, Title } from "./Playlist.styled";
import ArrowIcon from "../../../icons/ArrowIcon";
import { IPlaylist } from "../../../../interfaces/audio-player/IPlaylist";
import { IAllPlaylists } from "../../../../interfaces/audio-player/IAllPlaylists";

const Playlist: React.FC<{
  musicPlaylist: IAllPlaylists;
  selectedPlaylist: IPlaylist;
  setSelectedPlaylist: Dispatch<SetStateAction<IPlaylist>>;
}> = ({ musicPlaylist, selectedPlaylist, setSelectedPlaylist }) => {
  const [dropdownOpened, setDropdownOpened] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLUListElement | null>(null);

  const playlists: IPlaylist[] = Object.values(musicPlaylist).filter(
    (playlist) => playlist.title !== selectedPlaylist.title
  );

  function handleDropDownOptionClick(playlist: IPlaylist) {
    setSelectedPlaylist(playlist);
    setDropdownOpened(false);
  }

  function handleClickOutside(event: MouseEvent) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    )
      setDropdownOpened(false);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Box
        aria-label="Color Theme Toggle"
        onClick={() => setDropdownOpened((prev) => !prev)}
      >
        <Title>{selectedPlaylist.title}</Title>
        <ArrowIcon
          aria-label="Arrow Icon"
          top={!dropdownOpened}
          bottom={dropdownOpened}
        />
      </Box>
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
