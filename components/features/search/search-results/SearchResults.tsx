import InstantSearchCard from "../instant-search-card/InstantSearchCard";
import { Box } from "./SearchResults.styled";

const SearchResults: React.FC<{ results: any[] }> = ({ results }) => (
  <>
    {results.length ? (
      <Box>
        {results.map((result: any, index: number) => (
          <InstantSearchCard
            key={index}
            path={result.path}
            frontmatter={result.frontmatter}
          />
        ))}
      </Box>
    ) : (
      <></>
    )}
  </>
);

export default SearchResults;
