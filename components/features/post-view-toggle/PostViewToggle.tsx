import { postView } from "../../../types/postView";

const PostViewToggle: React.FC<{
  postView: postView;
  setPostView: (arg: postView) => void;
}> = ({ postView, setPostView }) => {
  function handleClick(e: any, viewType: postView): void {
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
