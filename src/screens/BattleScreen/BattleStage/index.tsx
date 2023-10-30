import { GameStateContext } from "@/providers/GameState";
import type { ReactNode } from "react";
import { useCallback, useMemo } from "react";
import { Stage } from "@pixi/react";
import { ContextBridge } from "@/providers/ContextBridge";
import { Background } from "@/screens/BattleScreen/BattleStage/Background";
import { CurrentPlayer } from "@/screens/BattleScreen/BattleStage/CurrentPlayer";
import { CurrentOpponent } from "@/screens/BattleScreen/BattleStage/CurrentOpponent";

export function BattleStage() {
  const contexts = useMemo(() => [GameStateContext], []);

  const barrierRender = useCallback(
    (children: ReactNode) => <Stage style={{ flex: 1 }}>{children}</Stage>,
    [],
  );

  return (
    <ContextBridge contexts={contexts} barrierRender={barrierRender}>
      <Background />
      <CurrentPlayer />
      <CurrentOpponent />
    </ContextBridge>
  );
}
