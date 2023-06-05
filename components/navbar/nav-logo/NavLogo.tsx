import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import useViewportWidthEventListener from "../../../hooks/useViewportWidthListener";

import { logo } from "../../../constants/logo";

import { Logo } from "./NavLogo.styled";
import { breakpoints } from "../../../styles/theme";

const NavLogo: React.FC = () => {
  const [logoSrc, setLogoSrc] = useState<any>(logo.short.hidden);

  const isVerticalView = useViewportWidthEventListener(
    breakpoints.useViewportWidth.xs
  );

  const logoHidden = isVerticalView ? logo.short.hidden : logo.long.hidden;
  const logoActive = isVerticalView ? logo.short.active : logo.long.active;

  useEffect(() => setLogoSrc(logoHidden), [logoHidden]);

  return (
    <Logo>
      <Link href={`/`}>

        <Image
          src={logoSrc}
          alt="website logo"
          onMouseOver={(): void => setLogoSrc(logoActive)}
          onMouseLeave={(): void => setLogoSrc(logoHidden)}
          onTouchStart={(): void => setLogoSrc(logoActive)}
          onTouchEnd={(): void => setLogoSrc(logoHidden)}
          onTouchCancel={(): void => setLogoSrc(logoHidden)}
        />

      </Link>
    </Logo>
  );
};

export default NavLogo;
