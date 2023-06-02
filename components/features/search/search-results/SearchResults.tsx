import { useSearchContext } from "../../../../context/SearchContext";
import InstantSearchCard from "../instant-search-card/InstantSearchCard";
import { Container } from "./SearchResults.styled";

const SearchResults: React.FC = () => {
  const { searchTerm, searchResults: results } = useSearchContext();

  if (searchTerm.length && results.length)
    return (
      <Container>
        {results.map((result: any, index: number) => (
          <InstantSearchCard
            key={index}
            path={result.path}
            frontmatter={result.frontmatter}
          />
        ))}
      </Container>
    );

  if (searchTerm.length && !results.length) return <p>No results found...</p>;

  return <></>;
};

export default SearchResults;
