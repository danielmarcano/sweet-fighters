import styles from "./index.module.css";
import { CHARACTERS } from "@/data/characters";
import { translations } from "@/locale/en";
import { Button } from "@/components/Button";
import { CSSColor, obtainCSSColor } from "@/utils/obtainCSSColor";
import type { Character } from "@/lib/Character/Character.interface";
import type { CSSProperties } from "react";

type CharacterListProps = {
  playerNumber: 1 | 2;
  onSelectCharacter: (character: Character) => void;
  onNextStep: () => void;
  onPreviousStep?: () => void;
  currentCharacter?: Character;
  className?: string;
};

export function CharacterList({
  playerNumber,
  currentCharacter,
  onSelectCharacter,
  onPreviousStep,
  onNextStep,
  className,
}: CharacterListProps) {
  const isFirstPlayer = playerNumber === 1;

  const playerCSSVariable = obtainCSSColor(
    isFirstPlayer ? CSSColor.ROSE : CSSColor.SUNNY,
  );

  return (
    <main className={`${className} ${styles.container}`}>
      <div>
        <h1 className={styles.title} style={{ color: playerCSSVariable }}>
          {translations["screens.playerSelect.title"](playerNumber)}
        </h1>
        <ul className={styles.characterList} role="listbox">
          {CHARACTERS.map((character) => (
            <li
              key={character.name}
              className={styles.characterListItem}
              role="option"
              aria-selected={currentCharacter?.name === character.name}
              style={
                {
                  "--player-color": playerCSSVariable,
                  "--player-label": isFirstPlayer ? "P1" : "P2",
                } as CSSProperties
              }
            >
              <span aria-hidden="true">{isFirstPlayer ? "P1" : "P2"}</span>
              <button
                onClick={() => onSelectCharacter(character)}
                className={styles.characterButton}
              >
                <img
                  src={character.avatarSrcPath}
                  alt={translations["screens.playerSelect.avatarAlt"](
                    character.name,
                  )}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <footer className={styles.navigationButtons}>
        {onPreviousStep ? (
          <Button onClick={onPreviousStep} color={CSSColor.SUNNY} type="button">
            {translations["screens.playerSelect.previousLabel"]}
          </Button>
        ) : null}
        {onNextStep ? (
          <Button
            onClick={onNextStep}
            color={isFirstPlayer ? CSSColor.ROSE : CSSColor.MOUNTAIN}
            disabled={Boolean(currentCharacter) === false}
            type="button"
            className={styles.nextButton}
          >
            {isFirstPlayer
              ? translations["screens.playerSelect.nextLabel"]
              : translations["screens.playerSelect.playLabel"]}
          </Button>
        ) : null}
      </footer>
    </main>
  );
}
