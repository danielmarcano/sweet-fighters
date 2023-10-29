import { useState } from "react";
import { CharacterList } from "./CharacterList";
import { useGameState } from "@/providers/GameState/useGameState";

type PlayerSelectProps = {
  onPlayersSelected: () => void;
  className?: string;
};

export function PlayerSelect({
  onPlayersSelected,
  className,
}: PlayerSelectProps) {
  const { playerOne, playerTwo, setPlayerOne, setPlayerTwo, setUpGame } =
    useGameState();

  const [currentStep, setCurrentStep] = useState<"player-one" | "player-two">(
    "player-one",
  );

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
            setUpGame();

            onPlayersSelected();
          }}
        />
      ) : null}
    </>
  );
}
