import { postViewType } from "../../../types/postViewType";

const PostViewToggle: React.FC<{
  postView: postViewType;
  setPostView: (arg: postViewType) => void;
}> = ({ postView, setPostView }) => {
  function handleClick(e: any, viewType: postViewType): void {
    e.preventDefault();
    setPostView(viewType);
  }

  return (
    <div>
      <button onClick={(e) => handleClick(e, "default")}>Default View</button>
      <button onClick={(e) => handleClick(e, "grid")}>Grid View</button>
    </div>
  );
};

export default PostViewToggle;
