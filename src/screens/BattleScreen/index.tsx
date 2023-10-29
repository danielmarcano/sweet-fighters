import styles from "./index.module.css";
import { Button } from "@/components/Button";
import { CSSColor } from "@/utils/obtainCSSColor";
import { useGameState } from "@/providers/GameState/useGameState";
import { ActionType } from "@/lib/ActionType.enum";

type BattleScreenProps = {
  className?: string;
};

export function BattleScreen({ className }: BattleScreenProps) {
  const { game } = useGameState();

  return (
    <main className={`${className} ${styles.container}`}>
      <p>Player 1: {JSON.stringify(game?.player1, null, 2)}</p>
      <p>
        Player 1 stats: love taken: {game?.player1?.loveTaken} avoidMode:{" "}
        {game?.player1?.avoidMode ? "true" : "false"}
      </p>
      <p>Player 2: {JSON.stringify(game?.player2, null, 2)}</p>
      <p>
        Player 2 stats: love taken: {game?.player2?.loveTaken} avoidMode:{" "}
        {game?.player2?.avoidMode ? "true" : "false"}
      </p>
      <p>
        Current Player love taken: {game?.currentPlayer?.loveTaken} avoid Mode:{" "}
        {game?.currentPlayer?.avoidMode ? "true" : "false"}
      </p>
      <footer className={styles.actions}>
        <Button
          variant="secondary"
          color={CSSColor.ROSE}
          disabled={game?.currentPlayer?.avoidMode}
          onClick={() => {
            game?.playTurn(ActionType.AVOID_ACTION);
          }}
        >
          Avoid
        </Button>

        <div className={styles.attackActions}>
          <Button
            variant="secondary"
            color={CSSColor.SUNNY}
            onClick={() => game?.playTurn(ActionType.LOVE_NORMAL_ACTION)}
          >
            Normal Attack
          </Button>

          <Button
            variant="secondary"
            color={CSSColor.MOUNTAIN}
            onClick={() => game?.playTurn(ActionType.LOVE_SPECIAL_ACTION)}
          >
            Special Attack
          </Button>
        </div>
      </footer>
    </main>
  );
}
