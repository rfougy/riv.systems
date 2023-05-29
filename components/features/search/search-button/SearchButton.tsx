import IconButton from "../../../shared/icon-button/IconButton";
import searchIcon from "../../../../public/assets/icons/search-icon.svg";
import { Dispatch, SetStateAction } from "react";

const SearchButton: React.FC<{
  setSearchIconClicked: Dispatch<SetStateAction<boolean>>;
}> = ({ setSearchIconClicked }) => {
  function handleClick() {
    setSearchIconClicked(true);
  }

  return (
    <IconButton
      src={searchIcon}
      alt="search button"
      ariaLabel="search button"
      onClick={(): void => handleClick()}
    />
  );
};

export default SearchButton;
