import Image from "next/image";
import React from "react";
import { Button } from "./IconButton.styled";

const IconButton: React.FC<{
  src: any;
  alt: string;
  ariaLabel: string;
  height?: string;
  width?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  rotate?: boolean;
  onClick?: () => any | ((arg: any) => any);
}> = ({
  src,
  alt,
  ariaLabel,
  height,
  width,
  isActive,
  isDisabled,
  rotate,
  onClick,
}) => {
  return (
    <>
      {/* @ts-ignore */}
      <Button
        aria-label={ariaLabel}
        height={height}
        width={width}
        rotate={rotate}
        isActive={isActive}
        isDisabled={isDisabled}
        onClick={() => (!onClick || isDisabled ? null : onClick())}
      >
        <Image src={src} alt={alt} layout="fill" objectFit="contain" />
      </Button>
    </>
  );
};

export default IconButton;
