import PostCard from "../../posts/card/PostCard";

/**
 * @deprecated currently not in use
 */
const SearchResults: React.FC<{ results: any }> = ({ results }) => {
  return (
    <>
      {results.length ? (
        <div>
          <div>
            <p>{results.length} results</p>
            {results.map((result: any, index: number) => (
              <PostCard
                key={index}
                path={result.path}
                frontmatter={result.frontmatter}
                forSearchResults={true}
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
