import { useEffect, useState } from "react";

import SearchResults from "./SearchResults";

/**
 * @deprecated currently not in use
 */
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
              onChange={(e) => setSearchTerm(e.target.value)}
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
