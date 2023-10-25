import { Button } from "../../components/Button";
import { translations } from "../../locale/en";
import { CSSColor } from "../../utils/obtainCSSColor";
import { MusicButton } from "../../providers/AudioPlayer/MusicButton";
import styles from "./index.module.css";
import { useAudioPlayer } from "../../providers/AudioPlayer/useAudioPlayer";
import { useEffect } from "react";

type MainScreenProps = {
  className?: string;
};

export function MainScreen({ className }: MainScreenProps) {
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
      <MusicButton className={styles.musicButton} />

      <h1 className={styles.title}>{translations["screens.main.title"]}</h1>

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
