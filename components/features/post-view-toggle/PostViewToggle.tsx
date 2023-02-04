import { postView } from "../../../types/postView";

const PostViewToggle: React.FC<{
  setPostView: (arg: postView) => void;
}> = ({ setPostView }) => {
  function handleClick(e: any, viewType: postView): void {
    e.preventDefault();
    setPostView(viewType);
  }

  return (
    <div>
      <button onClick={(e) => handleClick(e, "default")}>Default View</button>
      <button onClick={(e) => handleClick(e, "column")}>Column View</button>
    </div>
  );
};

export default PostViewToggle;
