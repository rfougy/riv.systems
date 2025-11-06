import PostCard from "./card/PostCard";
import { List } from "./GalleryView.styled";

const GalleryView: React.FC<{
  content: any;
}> = ({ content }) => {
  if (!content) {
    return <div>Error: No content available...</div>;
  }

  const galleryItems = content.flatMap((singleContent: any) => {
    const { path, frontmatter } = singleContent;

    if (!frontmatter.imageGallery) return [];

    return frontmatter.imageGallery.map(
      (image: { path: string; aspectRatio: string }, index: number) => ({
        key: `${path}-${index}`,
        path,
        frontmatter,
        image,
      })
    );
  });

  return (
    <List>
      {galleryItems.map((item: any) => (
        <PostCard
          key={item.key}
          path={item.path}
          frontmatter={item.frontmatter}
          galleryCoverImage={item.image}
        />
      ))}
    </List>
  );
};

export default GalleryView;
