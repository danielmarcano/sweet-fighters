import styles from "./index.module.css";
import { Button } from "@/components/Button";
import { CSSColor } from "@/utils/obtainCSSColor";
import { useGameState } from "@/providers/GameState/useGameState";
import { ActionType } from "@/lib/ActionType.enum";
import { BattleStage } from "./BattleStage";

type BattleScreenProps = {
  className?: string;
};

export function BattleScreen({ className }: BattleScreenProps) {
  const { game } = useGameState();

  return (
    <main className={`${className} ${styles.container}`}>
      <section>
        <BattleStage />
      </section>
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
