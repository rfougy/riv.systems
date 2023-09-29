import { Dispatch, SetStateAction, useState } from "react";
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

  const playlists: IPlaylist[] = Object.values(musicPlaylist).filter(
    (playlist) => playlist.title !== selectedPlaylist.title
  );

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
        <Dropdown>
          {playlists.map((playlist: IPlaylist, index) => (
            <PlaylistOption key={index}>
              <Title>{playlist.title}</Title>
            </PlaylistOption>
          ))}
        </Dropdown>
      )}
    </>
  );
};

export default Playlist;
