import "./assets/styles/global.css";
import "./assets/styles/colors.css";
import { MainScreen } from "./screens/MainScreen";
import { AudioPlayerProvider } from "./providers/AudioPlayer";
import { useState } from "react";

function App() {
  const [currentScreen, setCurrentScreen] = useState<"main" | "player-select">(
    "main",
  );

  return (
    <AudioPlayerProvider>
      {currentScreen == "main" ? (
        <MainScreen onStartGame={() => setCurrentScreen("player-select")} />
      ) : null}
    </AudioPlayerProvider>
  );
}

export default App;
