import { useReducer } from "react";
import { translations } from "../../../locale/en";
import { Button } from "../../../components/Button";
import { CSSColor } from "../../../utils/obtainCSSColor";
import { SoundMaxIcon, SoundMinIcon } from "../../../assets/icons";
import styles from "./index.module.css";

type MusicButtonProps = {
  /**
   * Default value for isMusicPlaying state
   */
  defaultIsMusicPlaying?: boolean;
  className?: string;
};

export function MusicButton({
  defaultIsMusicPlaying = true,
  className,
}: MusicButtonProps) {
  const [isMusicPlaying, toggleIsMusicPlaying] = useReducer(
    (value) => !value,
    defaultIsMusicPlaying,
  );

  return (
    <Button
      className={`${className} ${styles.container}`}
      color={isMusicPlaying ? CSSColor.GRASS : CSSColor.ROSE}
      type="button"
      ariaLabel={
        isMusicPlaying
          ? translations["screens.main.musicButton.turnOffLabel"]
          : translations["screens.main.musicButton.turnOnLabel"]
      }
      onClick={toggleIsMusicPlaying}
    >
      {isMusicPlaying ? <SoundMaxIcon /> : <SoundMinIcon />}
    </Button>
  );
}
