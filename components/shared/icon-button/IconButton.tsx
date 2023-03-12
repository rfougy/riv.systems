import Image from "next/image";
import React from "react";
import { Button } from "./IconButton.styled";

const IconButton: React.FC<{
  src: any;
  alt: string;
  ariaLabel: string;
  isActive?: boolean;
  onClick: () => any | ((arg: any) => any);
}> = ({ src, alt, ariaLabel, isActive, onClick }) => {
  return (
    <>
      {/* @ts-ignore */}
      <Button
        aria-label={ariaLabel}
        isActive={isActive}
        onClick={() => onClick()}
      >
        <Image src={src} alt={alt} layout="fill" objectFit="contain" />
      </Button>
    </>
  );
};

export default IconButton;
