import InstantSearchCard from "../instant-search-card/InstantSearchCard";
import { Container } from "./SearchResults.styled";

const SearchResults: React.FC<{ results: any[] }> = ({ results }) => (
  <>
    {results.length ? (
      <Container>
        {results.map((result: any, index: number) => (
          <InstantSearchCard
            key={index}
            path={result.path}
            frontmatter={result.frontmatter}
          />
        ))}
      </Container>
    ) : (
      <></>
    )}
  </>
);

export default SearchResults;
