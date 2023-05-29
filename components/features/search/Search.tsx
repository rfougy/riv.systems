import { useEffect, useState } from "react";

import SearchResults from "./SearchResults";

const Search: React.FC<{}> = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

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
    <div>
      <div>
        <div>
          <form>
            <input
              type="search"
              name="search"
              value={searchTerm}
              onChange={(e) => handleChange(e)}
              onKeyDown={(e) => disableEnterKey(e)}
              placeholder="Search..."
            />
          </form>
        </div>
      </div>
      <SearchResults results={searchResults} />
    </div>
  );
};

export default Search;
