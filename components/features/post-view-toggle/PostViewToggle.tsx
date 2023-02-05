import Image from "next/image";

import { postView } from "../../../types/postView";

import columnViewIcon from "../../../public/assets/view-icon-column.svg";
import defaultViewIcon from "../../../public/assets/view-icon-default.svg";
import gridViewIcon from "../../../public/assets/view-icon-grid.svg";

import { Button, List } from "./PostViewToggle.styled";

const PostViewToggle: React.FC<{
  postView: postView;
  setPostView: (arg: postView) => void;
}> = ({ postView, setPostView }) => {
  function handleClick(e: any, viewType: postView): void {
    e.preventDefault();
    setPostView(viewType);
  }

  return (
    <List>
      {/* @ts-ignore */}
      <Button
        aria-label="Default View Button"
        isCurrView={postView === "default"}
        onClick={(e) => handleClick(e, "default")}
      >
        <Image
          src={defaultViewIcon}
          alt="default view icon"
          layout="fill"
          objectFit="contain"
        />
      </Button>
      {/* @ts-ignore */}
      <Button
        aria-label="Column View Button"
        isCurrView={postView === "column"}
        onClick={(e) => handleClick(e, "column")}
      >
        <Image
          src={columnViewIcon}
          alt="column view icon"
          layout="fill"
          objectFit="contain"
        />
      </Button>
    </List>
  );
};

export default PostViewToggle;
