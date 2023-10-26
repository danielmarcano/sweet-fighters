import { translations } from "../../../locale/en";
import { Button } from "../../../components/Button";
import { CSSColor } from "../../../utils/obtainCSSColor";
import { SoundMaxIcon, SoundMinIcon } from "../../../assets/icons";
import styles from "./index.module.css";
import { useAudioPlayer } from "../useAudioPlayer";

type MusicButtonProps = {
  className?: string;
};

export function MusicButton({ className }: MusicButtonProps) {
  const {
    playAudio,
    pauseAudio,
    audioElementProps: { isPlaying },
  } = useAudioPlayer();

  return (
    <>
      <Button
        className={`${className} ${styles.container}`}
        color={isPlaying ? CSSColor.GRASS : CSSColor.ROSE}
        ariaLabel={
          isPlaying
            ? translations["screens.main.musicButton.turnOffLabel"]
            : translations["screens.main.musicButton.turnOnLabel"]
        }
        onClick={() => {
          if (isPlaying) {
            return pauseAudio();
          }

          playAudio();
        }}
      >
        {isPlaying ? <SoundMaxIcon /> : <SoundMinIcon />}
      </Button>
    </>
  );
}
