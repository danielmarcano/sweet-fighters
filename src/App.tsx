import "@/assets/styles/global.css";
import "@/assets/styles/colors.css";
import { MainScreen } from "@/screens/MainScreen";
import { AudioPlayerProvider } from "@/providers/AudioPlayer";
import { useState } from "react";
import { PlayerSelect } from "@/screens/PlayerSelect/index";

function App() {
  const [currentScreen, setCurrentScreen] = useState<"main" | "player-select">(
    "main",
  );

  return (
    <AudioPlayerProvider>
      {currentScreen == "main" ? (
        <MainScreen onStartGame={() => setCurrentScreen("player-select")} />
      ) : null}
      {currentScreen == "player-select" ? <PlayerSelect /> : null}
    </AudioPlayerProvider>
  );
}

export default App;
