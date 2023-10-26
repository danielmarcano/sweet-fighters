import { useState } from "react";
import { CharacterList } from "./CharacterList";
import type { Character } from "@/lib/Character/Character.interface";

type PlayerSelectProps = {
  className?: string;
};

export function PlayerSelect({ className }: PlayerSelectProps) {
  const [currentStep, setCurrentStep] = useState<"player-one" | "player-two">(
    "player-one",
  );

  const [playerOne, setPlayerOne] = useState<Character>();

  const [playerTwo, setPlayerTwo] = useState<Character>();

  return (
    <>
      {currentStep === "player-one" ? (
        <CharacterList
          className={className}
          onSelectCharacter={setPlayerOne}
          playerNumber={1}
          onNextStep={() => setCurrentStep("player-two")}
          currentCharacter={playerOne}
        />
      ) : null}

      {currentStep === "player-two" ? (
        <CharacterList
          className={className}
          onSelectCharacter={setPlayerTwo}
          playerNumber={2}
          currentCharacter={playerTwo}
          onPreviousStep={() => setCurrentStep("player-one")}
          onNextStep={() => {
            throw new Error("Start game and show loader");
          }}
        />
      ) : null}
    </>
  );
}
