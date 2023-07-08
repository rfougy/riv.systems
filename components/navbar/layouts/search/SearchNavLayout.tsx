import React, { Dispatch, SetStateAction } from "react";
import Search from "../../../features/search/Search";
import IconButton from "../../../shared/icon-button/IconButton";

import closeIcon from "../../../../public/assets/icons/close-icon.svg";

const SearchNavLayout: React.FC<{
  setSearchResults: Dispatch<SetStateAction<any[]>>;
  setSearchActivated: Dispatch<SetStateAction<boolean>>;
}> = ({ setSearchResults, setSearchActivated }) => (
  <>
    <Search setSearchResults={setSearchResults} />
    <IconButton
      src={closeIcon}
      alt="close search button"
      ariaLabel="close search button"
      height="1.25rem"
      width="1.25rem"
      onClick={() => setSearchActivated(false)}
    />
  </>
);

export default SearchNavLayout;
