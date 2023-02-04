import { postView } from "../../../types/postView";
import columnViewIcon from "../../../public/assets/view-icon-column.svg";
import defaultViewIcon from "../../../public/assets/view-icon-default.svg";
import gridViewIcon from "../../../public/assets/view-icon-grid.svg";
import { Button, List } from "./PostViewToggle.styled";
import Image from "next/image";

const PostViewToggle: React.FC<{
  setPostView: (arg: postView) => void;
}> = ({ setPostView }) => {
  function handleClick(e: any, viewType: postView): void {
    e.preventDefault();
    setPostView(viewType);
  }

  return (
    <List>
      <Button onClick={(e) => handleClick(e, "default")}>
        <Image src={defaultViewIcon} alt="default view icon" />
      </Button>
      <Button onClick={(e) => handleClick(e, "column")}>
        <Image src={columnViewIcon} alt="column view icon" />
      </Button>
    </List>
  );
};

export default PostViewToggle;
