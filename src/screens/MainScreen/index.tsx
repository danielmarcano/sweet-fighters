import { Button } from "../../components/Button";
import { translations } from "../../locale/en";
import { CSSColor } from "../../utils/obtainCSSColor";
import styles from "./index.module.css";
import { useAudioPlayer } from "../../providers/AudioPlayer/useAudioPlayer";
import { useEffect } from "react";

type MainScreenProps = {
  onStartGame: () => void;
  className?: string;
};

export function MainScreen({ onStartGame, className }: MainScreenProps) {
  const { setAudioFiles } = useAudioPlayer();

  useEffect(() => {
    setAudioFiles([
      {
        src: "/music/MainTheme.ogg",
        type: "ogg",
      },
      {
        src: "/music/MainTheme.mp3",
        type: "mpeg",
      },
    ]);
  }, [setAudioFiles]);

  return (
    <main className={`${className} ${styles.container}`}>
      <h1 className={styles.title}>{translations["screens.main.title"]}</h1>

      <Button color={CSSColor.MOUNTAIN} onClick={onStartGame}>
        {translations["screens.main.startGameLabel"]}
      </Button>
    </main>
  );
}
