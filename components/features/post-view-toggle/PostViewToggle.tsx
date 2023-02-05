import { postView } from "../../../types/postView";

import { List } from "./PostViewToggle.styled";
import { postViewOptions } from "../../../constants/postViewOptions";
import ToggleButton from "./toggle-button/ToggleButton";

const PostViewToggle: React.FC<{
  postView: postView;
  setPostView: (arg: postView) => void;
}> = ({ postView, setPostView }) => (
  <List>
    {postViewOptions.map(
      (option: any, index: number): React.ReactNode => (
        <ToggleButton
          key={index}
          isCurrView={postView === option}
          postViewOption={option}
          setPostView={setPostView}
        />
      )
    )}
  </List>
);

export default PostViewToggle;
