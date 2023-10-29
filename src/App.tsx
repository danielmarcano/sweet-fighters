import "@/assets/styles/global.css";
import "@/assets/styles/colors.css";
import { MainScreen } from "@/screens/MainScreen";
import { AudioPlayerProvider } from "@/providers/AudioPlayer";
import { useState } from "react";
import { PlayerSelect } from "@/screens/PlayerSelect/index";
import { GameStateProvider } from "./providers/GameState";

function App() {
  const [currentScreen, setCurrentScreen] = useState<
    "main" | "player-select" | "game"
  >("main");

  return (
    <AudioPlayerProvider>
      {currentScreen == "main" ? (
        <MainScreen onStartGame={() => setCurrentScreen("player-select")} />
      ) : null}
      <GameStateProvider>
        {currentScreen == "player-select" ? (
          <PlayerSelect onPlayersSelected={() => setCurrentScreen("game")} />
        ) : null}
      </GameStateProvider>
    </AudioPlayerProvider>
  );
}

export default App;
