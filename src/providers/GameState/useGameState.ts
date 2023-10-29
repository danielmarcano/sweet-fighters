import { useContext } from "react";
import { GameStateContext } from ".";

export function useGameState() {
  const context = useContext(GameStateContext);

  if (!context) {
    throw new Error("useGameState must be used within GameStateContext");
  }

  return context;
}
