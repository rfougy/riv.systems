import { useRouter } from "next/router";
import React, { createContext, useState, useContext, useEffect } from "react";

export const SearchContext = createContext<any | null>(null);
export const useSearchContext = () => useContext(SearchContext);

const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchIconClicked, setSearchIconClicked] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => setSearchIconClicked(false));
    return () =>
      router.events.off("routeChangeStart", () => setSearchIconClicked(false));
  }, []);

  return (
    <SearchContext.Provider
      value={{
        searchIconClicked,
        searchResults,
        setSearchIconClicked,
        setSearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
