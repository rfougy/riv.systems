import Image from "next/image";
import React from "react";
import { Button } from "./IconButton.styled";

const IconButton: React.FC<{
  src: any;
  alt: string;
  ariaLabel: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick: () => any | ((arg: any) => any);
}> = ({ src, alt, ariaLabel, isActive, isDisabled, onClick }) => {
  return (
    <>
      {/* @ts-ignore */}
      <Button
        aria-label={ariaLabel}
        isActive={isActive}
        isDisabled={isDisabled}
        onClick={() => (isDisabled ? null : onClick())}
      >
        <Image src={src} alt={alt} layout="fill" objectFit="contain" />
      </Button>
    </>
  );
};

export default IconButton;
