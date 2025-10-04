import PostCard from "./card/PostCard";

import { List, Item } from "./GalleryView.styled";

const GalleryView: React.FC<{
  content: any;
}> = ({ content }) => {
  return content ? (
    <List>
      {content.map((singleContent: any, index: number) => {
        const { path, frontmatter } = singleContent;
        const hasImageGallery = frontmatter.imageGallery;

        return <PostCard key={index} path={path} frontmatter={frontmatter} />;
      })}
    </List>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default GalleryView;
