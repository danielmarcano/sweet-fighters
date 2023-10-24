import { Button } from "../../components/Button";
import { CSSColor } from "../../utils/obtainCSSColor";
import { MusicButton } from "./MusicButton";
import styles from "./index.module.css";

type MainScreenProps = {
  className?: string;
};

export function MainScreen({ className }: MainScreenProps) {
  return (
    <main className={`${className} ${styles.container}`}>
      <MusicButton className={styles.musicButton} />

      <h1 className={styles.title}>Sweet Huggers</h1>

      <Button
        type="button"
        color={CSSColor.MOUNTAIN}
        onClick={() => new Error("Start game")}
      >
        Start Game
      </Button>
    </main>
  );
}
