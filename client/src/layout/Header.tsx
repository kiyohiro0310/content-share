import type { Dispatch, SetStateAction } from "react";
import SpotifySearch from "../components/search/SpotifySearch";
import YouTubeSearch from "../components/search/YouTubeSearch";
import ModeSelect from "../components/ui/ModeSelect";

const Header = ({ mode, setMode }: { mode: string; setMode: Dispatch<SetStateAction<string>> }) => {
  return (
    <div className="md:container md:mx-auto w-full py-4 flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-4">
        <div>
          <img src="/sl-logo.png" alt="Sound Link Logo" width={120} />
        </div>
        <div className="md:w-2xl md:h-32 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 space-x-4">
          {mode == "Spotify" ? <SpotifySearch /> : <YouTubeSearch />}
          <div className="flex space-x-2">
            <ModeSelect mode="Spotify" isModeOn={mode == "Spotify"} onMode={setMode} />
            <ModeSelect mode="YouTube" isModeOn={mode == "YouTube"} onMode={setMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
