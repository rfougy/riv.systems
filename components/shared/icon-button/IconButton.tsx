import Image from "next/image";
import React from "react";
import { Button } from "./IconButton.styled";

const IconButton: React.FC<{
  src: any;
  alt: string;
  ariaLabel: string;
  isActive?: boolean;
  isDisabled?: boolean;
  rotate?: boolean;
  onClick: () => any | ((arg: any) => any);
}> = ({ src, alt, ariaLabel, isActive, isDisabled, rotate, onClick }) => {
  return (
    <>
      {/* @ts-ignore */}
      <Button
        aria-label={ariaLabel}
        isActive={isActive}
        isDisabled={isDisabled}
        rotate={rotate}
        onClick={() => (isDisabled ? null : onClick())}
      >
        <Image src={src} alt={alt} layout="fill" objectFit="contain" />
      </Button>
    </>
  );
};

export default IconButton;
