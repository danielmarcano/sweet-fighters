import { useGameState } from "@/providers/GameState/useGameState";
import { Sprite, useApp } from "@pixi/react";

export function CurrentPlayer() {
  const { game } = useGameState();

  const { renderer } = useApp();

  return (
    <Sprite
      position={{ x: 100, y: renderer.screen.height - 100 }}
      scale={1}
      image={game?.currentPlayer?.character?.avatarSrcPath}
      width={100}
      height={100}
    />
  );
}
