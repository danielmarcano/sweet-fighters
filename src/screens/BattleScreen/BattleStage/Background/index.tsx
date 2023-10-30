import { TilingSprite, useApp } from "@pixi/react";
import { useEffect, useState } from "react";

export function Background() {
  const { ticker } = useApp();

  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function animateBackground(delta: number) {
      setBackgroundPosition((prev) => ({ ...prev, x: prev.x + delta }));
    }

    ticker.add(animateBackground);

    return () => {
      ticker.remove(animateBackground);
    };
  }, [ticker]);

  return (
    <TilingSprite
      tilePosition={backgroundPosition}
      tileScale={{ x: 2, y: 2 }}
      image={"/images/backgrounds/battle-background-1.png"}
      width={1000}
      height={2000}
    />
  );
}
