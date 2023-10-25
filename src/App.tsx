import "./assets/styles/global.css";
import "./assets/styles/colors.css";
import { MainScreen } from "./screens/MainScreen";
import { AudioPlayerProvider } from "./providers/AudioPlayer";

function App() {
  return (
    <AudioPlayerProvider>
      <MainScreen />
    </AudioPlayerProvider>
  );
}

export default App;
