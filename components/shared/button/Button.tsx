import Link from "next/link";
import React from "react";
import { Button as ButtonStyled } from "./Button.styled";

const Button: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <Link href={href}>
    <ButtonStyled>{children}</ButtonStyled>
  </Link>
);

export default Button;
