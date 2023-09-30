import { useRouter } from "next/router";
import { createContext, useState, useContext, useEffect } from "react";

export const SearchContext = createContext<any | null>(null);
export const useSearchContext = () => useContext(SearchContext);

const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchActivated, setSearchActivated] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => setSearchActivated(false));
    return () =>
      router.events.off("routeChangeStart", () => setSearchActivated(false));
  }, []);

  return (
    <SearchContext.Provider
      value={{
        searchActivated,
        searchResults,
        setSearchActivated,
        setSearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
