import InstantSearchCard from "./instant-search-card/InstantSearchCard";

const SearchResults: React.FC<{ results: any[] }> = ({ results }) => {
  return (
    <>
      {results.length ? (
        <div>
          <div>
            <p>{results.length} results</p>
            {results.map((result: any, index: number) => (
              <InstantSearchCard
                key={index}
                path={result.path}
                frontmatter={result.frontmatter}
              />
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SearchResults;
