import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Form, Input } from "./Search.styled";

const Search: React.FC<{
  setSearchResults: Dispatch<SetStateAction<any[]>>;
}> = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  async function getSearchResults() {
    if (searchTerm === "") {
      setSearchResults([]);
    } else {
      const res = await fetch(`/api/search?q=${searchTerm}`);
      const { results } = await res.json();
      setSearchResults(results);
    }
  }

  function handleChange(e: any) {
    setSearchTerm(e.target.value.toLowerCase());
  }

  function disableEnterKey(e: any): void {
    (e.keyCode === 13 || e.which === 13 || e.key === "Enter") &&
      e.preventDefault();
  }

  useEffect(() => {
    getSearchResults();
  }, [searchTerm]);

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
