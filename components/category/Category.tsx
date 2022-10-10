const Category: React.FC<{ slug: string; content: string | string[] | undefined }> = ({
  slug,
  content,
}) => {
  const category: string = slug[0];

  return content ? (
    <div>
      <div>Category Page: {category}</div>
      <div>
        {content.map((post: string, index: number) => {
          const date = post.split("_")[0];
          const title = post.split("_")[1];

          return (
            <div key={index}>
              <div>{title}</div>
              <div>{date}</div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default Category;
