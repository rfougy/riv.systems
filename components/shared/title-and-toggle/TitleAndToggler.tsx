import { Box, PageTitle } from "./TitleAndToggler.styled";
import PostViewToggle from "../../features/post-view-toggle/PostViewToggle";
import { postView } from "../../../types/postView";
import { Dispatch, SetStateAction } from "react";
import useViewportWidthEventListener from "../../../hooks/useViewportWidthListener";
import { breakpoints } from "../../../styles/theme";

const TitleAndToggler: React.FC<{
  title: string;
  postView: postView;
  setPostView: Dispatch<SetStateAction<postView>>;
}> = ({ title, postView, setPostView }) => {
  const renderPostViewOptions = !useViewportWidthEventListener(
    breakpoints.useViewportWidth.xs
  );

  return (
    <Box>
      <div>
        <PageTitle>{title}</PageTitle>
      </div>
      {renderPostViewOptions && (
        <PostViewToggle setPostView={setPostView} postView={postView} />
      )}
    </Box>
  );
};

export default TitleAndToggler;
