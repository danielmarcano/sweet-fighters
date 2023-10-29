import type { Character } from "@/lib/Character/Character.interface";
import { Game } from "@/lib/Game.class";
import { Player } from "@/lib/Player.class";
import type { ReactNode } from "react";
import {
  createContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

type GameStateContextValue = {
  game?: Game | undefined;
  setUpGame: () => void;
  playerOne?: Character;
  playerTwo?: Character;
  setPlayerOne: (player: Character) => void;
  setPlayerTwo: (player: Character) => void;
};

export const GameStateContext = createContext<
  GameStateContextValue | undefined
>(undefined);

type GameStateProviderProps = {
  children: ReactNode;
};

export function GameStateProvider({ children }: GameStateProviderProps) {
  const [playerOne, setPlayerOne] = useState<Character>();
  const [playerTwo, setPlayerTwo] = useState<Character>();

  // Taken from the legacy React docs
  // More info here: https://legacy.reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
  const forceUpdateReducerArray = useReducer((x) => x + 1, 0);
  const game = useRef<Game>();
  const gameObserver = useRef<(data: Game) => void>();

  const props = useMemo(
    () => ({
      setPlayerOne(player: Character) {
        setPlayerOne(player);
      },
      setPlayerTwo(player: Character) {
        setPlayerTwo(player);
      },
      playerOne,
      playerTwo,
      game: game.current,
      setUpGame() {
        if (playerOne && playerTwo) {
          game.current = new Game(new Player(playerOne), new Player(playerTwo));

          gameObserver.current = game.current?.eventManager.addObserver(
            function forceReRenderOnGameUpdate() {
              // forceUpdateReducerArray needs to be passed as an array
              // so that when its state changes, this useMemo gets executed
              forceUpdateReducerArray[1]();
            },
          );
        }
      },
    }),
    [
      game,
      playerOne,
      playerTwo,
      setPlayerOne,
      setPlayerTwo,
      forceUpdateReducerArray,
    ],
  );

  useEffect(() => {
    return () => {
      if (game.current && gameObserver.current) {
        game.current.eventManager.removeObserver(gameObserver.current);
      }
    };
  }, []);

  return (
    <GameStateContext.Provider value={props}>
      {children}
    </GameStateContext.Provider>
  );
}
