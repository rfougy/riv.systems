import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import useViewportWidthEventListener from "../../../hooks/useViewportWidthListener";

import { logo } from "../../../constants/logo";

import { Logo } from "./NavLogo.styled";

const NavLogo: React.FC = () => {
  const isVerticalView = useViewportWidthEventListener(640);

  const [logoState, setLogoState] = useState<any>();

  const logoHidden = isVerticalView ? logo.short.hidden : logo.long.hidden;
  const logoActive = isVerticalView ? logo.short.active : logo.long.active;

  useEffect(() => setLogoState(logoHidden), [logoHidden]);

  return (
    <Logo>
      <Link href={`/`} passHref>
        <a>
          <Image
            src={logoState}
            alt="website logo"
            onMouseOver={(): void => setLogoState(logoActive)}
            onMouseLeave={(): void => setLogoState(logoHidden)}
            onTouchStart={(): void => setLogoState(logoActive)}
            onTouchEnd={(): void => setLogoState(logoHidden)}
            onTouchCancel={(): void => setLogoState(logoHidden)}
          />
        </a>
      </Link>
    </Logo>
  );
};

export default NavLogo;
