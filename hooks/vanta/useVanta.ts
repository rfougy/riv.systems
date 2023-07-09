import { useEffect, useRef, useState } from "react";

import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export default function useVanta() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xb0b0b0,
          midtoneColor: 0xc9c9c9,
          lowlightColor: 0x999999,
          baseColor: 0xe7e7e7,
          blurFactor: 0.9,
          speed: 0.0,
          zoom: 0.2,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);

  return vantaRef;
}
