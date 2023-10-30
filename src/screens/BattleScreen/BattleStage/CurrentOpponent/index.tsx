import { useGameState } from "@/providers/GameState/useGameState";
import { Sprite, useApp } from "@pixi/react";

export function CurrentOpponent() {
  const { game } = useGameState();

  const { renderer } = useApp();

  return (
    <Sprite
      position={{ x: renderer.screen.width - 100, y: 100 }}
      image={game?.currentOpponent.character.avatarSrcPath}
      scale={{ x: -0.5, y: 0.5 }}
      anchor={{ x: 0.5, y: 0.5 }}
      width={100}
      height={100}
    />
  );
}
