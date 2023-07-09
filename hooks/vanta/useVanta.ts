import { useEffect, useRef, useState } from "react";

import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export default function useVanta() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    !vantaEffect &&
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x767676,
          midtoneColor: 0x5b5b5b,
          lowlightColor: 0x6e6e6e,
          baseColor: 0x212121,
          blurFactor: 0.9,
          speed: 0.0,
          zoom: 0.4,
        })
      );

    return () => vantaEffect && vantaEffect.destroy();
  }, [vantaEffect]);

  return vantaRef;
}
