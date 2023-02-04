import PostCard from "./card/PostCard";

import { List, Item } from "./ColumnView.styled";

const ColumnView: React.FC<{
  content: any;
}> = ({ content }) => {
  return content ? (
    <List>
      {content.map((singleContent: any, index: number) => {
        const { path, frontmatter } = singleContent;

        return (
          <Item key={index}>
            <PostCard path={path} frontmatter={frontmatter} />
          </Item>
        );
      })}
    </List>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default ColumnView;
