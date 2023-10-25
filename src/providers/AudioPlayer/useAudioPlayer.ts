import { useContext } from "react";
import { AudioPlayerContext } from ".";

export function useAudioPlayer() {
  const context = useContext(AudioPlayerContext);

  if (!context) {
    throw new Error("useAudioPlayer must be used within AudioPlayerContext");
  }

  return context;
}
