import type { ReactNode } from "react";
import { createContext, useMemo, useRef, useState } from "react";

type AudioFile = {
  src: string;
  /**
   * mpeg is used for .mp3 files
   */
  type: "mpeg" | "ogg";
};

type AudioPlayerContextValue = {
  setAudioFiles: (audioFiles: AudioFile[]) => void;
  playAudio: () => void;
  pauseAudio: () => void;
  audioElementProps: {
    isPlaying: boolean;
  };
};

export const AudioPlayerContext = createContext<
  AudioPlayerContextValue | undefined
>(undefined);

type AudioPlayerProviderProps = {
  children: ReactNode;
};

export function AudioPlayerProvider({ children }: AudioPlayerProviderProps) {
  const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const props = useMemo(
    () => ({
      setAudioFiles(audioFiles: AudioFile[]) {
        setAudioFiles(audioFiles);
      },
      playAudio() {
        setIsPlaying(true);

        audioRef.current?.play();
      },
      pauseAudio() {
        setIsPlaying(false);

        audioRef.current?.pause();
      },
      audioElementProps: {
        isPlaying,
      },
    }),
    [isPlaying],
  );

  return (
    <AudioPlayerContext.Provider value={props}>
      {children}
      <audio ref={audioRef} loop>
        {audioFiles.map(({ src, type }) => (
          <source key={src} src={src} type={`audio/${type}`} />
        ))}
      </audio>
    </AudioPlayerContext.Provider>
  );
}
