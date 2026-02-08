import type { Dispatch, SetStateAction } from "react";
import SpotifySearch from "../components/search/SpotifySearch";
import YouTubeSearch from "../components/search/YouTubeSearch";
import ModeSelect from "../components/ui/ModeSelect";
import AuthButtons from '../components/ui/AuthButtons';

const Header = ({ mode, setMode }: { mode: string; setMode: Dispatch<SetStateAction<string>> }) => {


  return (
    <div className="container mx-auto py-4 flex items-center justify-between space-x-4">
      <div className="w-6xl flex justify-around items-center space-x-4">
        <div>
          <img src="/sl-logo.png" alt="Sound Link Logo" width={70} />
        </div>
        <div className="w-2xl h-32 flex items-center  space-x-4">
          {mode == "Spotify" ? <SpotifySearch /> : <YouTubeSearch />}
          <div className="flex space-x-2">
            <ModeSelect mode="Spotify" isModeOn={mode == "Spotify"} onMode={setMode} />
            <ModeSelect mode="YouTube" isModeOn={mode == "YouTube"} onMode={setMode} />
          </div>
        </div>
      </div>

      <AuthButtons />      
    </div>
  );
};

export default Header;
