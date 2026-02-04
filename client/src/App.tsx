import { useState } from "react";
import SpotifySearch from "./components/search/SpotifySearch";
import YouTubeSearch from "./components/search/YouTubeSearch";
import ModeSelect from "./components/ui/ModeSelect";
import PlayList from "./components/list/PlayList";
import { useAddedContent } from "./hooks/useAddedContent";
import type { PlayContentType } from "../type";
import WebPlayer from "./components/player/WebPlayer";
import SpotifyPlayer from "./components/player/SpotifyPlayer";

function App() {
  const [mode, setMode] = useState("Spotify");
  const [playContent, setPlayContent] = useState<PlayContentType>();
  const { addedContents } = useAddedContent();

  return (
    <div className="py-4">
      <h1 className="text-4xl font-bold px-4 py-12">Share your favourite contents with my friends!</h1>
      <p>My 600+ friends can see your favourite music or video! Let's share it with them!</p>
      <div className="flex md:space-x-8">
        <PlayList contents={addedContents && addedContents} setPlayContent={setPlayContent} />
        <div className="lg:w-[45vw]">
          {mode == "Spotify" ? <SpotifySearch /> : <YouTubeSearch />}
          <div className="flex space-x-4 py-4">
            <ModeSelect mode="Spotify" isModeOn={mode == "Spotify"} onMode={setMode} />
            <ModeSelect mode="YouTube" isModeOn={mode == "YouTube"} onMode={setMode} />
          </div>
        </div>
        <div className="lg:w-[40vw] flex flex-col items-center">
          {playContent && (
            <div className="">
              {playContent.type == "spotify" ? (
                <SpotifyPlayer url={playContent.url!} />
              ) : (
                <WebPlayer id={playContent.id!} />
              )}
              <div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
