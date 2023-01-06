import DefaultCard from "../../posts/default/card/DefaultCard";
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
              <DefaultCard
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
