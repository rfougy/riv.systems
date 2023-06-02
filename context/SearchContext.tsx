import { useRouter } from "next/router";
import React, { createContext, useState, useContext, useEffect } from "react";
import { getAllPosts } from "../lib/cms/getCmsContent";

import cachedPosts from "../cache/data";

export const SearchContext = createContext<any | null>(null);
export const useSearchContext = () => useContext(SearchContext);

const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchActivated, setSearchActivated] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const router = useRouter();

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

  useEffect(() => {
    console.log("cachedPosts: ", cachedPosts);
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", () => setSearchActivated(false));
    return () =>
      router.events.off("routeChangeStart", () => setSearchActivated(false));
  }, []);

  return (
    <SearchContext.Provider
      value={{
        searchActivated,
        searchTerm,
        searchResults,
        setSearchActivated,
        setSearchTerm,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
