import { useSearchContext } from "../../../context/SearchContext";

import { Form, Input } from "./Search.styled";

const Search: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearchContext();

  function handleChange(e: any) {
    setSearchTerm(e.target.value.toLowerCase());
  }

  function disableEnterKey(e: any): void {
    (e.keyCode === 13 || e.which === 13 || e.key === "Enter") &&
      e.preventDefault();
  }

  return (
    <Form>
      <Input
        type="search"
        name="search"
        value={searchTerm}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => disableEnterKey(e)}
        placeholder="Search..."
        autoFocus
      />
    </Form>
  );
};

export default Search;
