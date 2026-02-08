import { useState } from "react";
import SpotifySearch from "./components/search/SpotifySearch";
import YouTubeSearch from "./components/search/YouTubeSearch";
import ModeSelect from "./components/ui/ModeSelect";
import PlayList from "./components/list/PlayList";
import { useAddedContent } from "./hooks/useAddedContent";
import type { PlayContentType } from "../type";
import WebPlayer from "./components/player/WebPlayer";
import SpotifyPlayer from "./components/player/SpotifyPlayer";
import CommentForm from "./components/CommentForm";
import "react-toastify/dist/ReactToastify.css"; // Don't forget this!
import { ToastContainer } from 'react-toastify';
import Header from './layout/Header';

function App() {
  const [mode, setMode] = useState("Spotify");
  const [playContent, setPlayContent] = useState<PlayContentType>();
  const [playerOpen, setPlayerOpen] = useState(false);
  const { addedContents } = useAddedContent();

  function playerHandler(content: PlayContentType) {
    setPlayContent(content);
    setPlayerOpen(true);
  }

  const handleNewComment = (newComment: { date: string; comment: string }) => {
    if (playContent) {
      setPlayContent({
        ...playContent,
        comments: [newComment, ...(playContent.comments || [])],
      });
    }
  };

  return (
    <div className="py-4">
      <ToastContainer aria-label={undefined} position="bottom-right" autoClose={3000} theme="dark" />
      <Header mode={mode} setMode={setMode} />
      <div className="container mx-auto relative flex flex-col justify-center items-center w-full">
        
        <div className="flex overflow-auto">
          <PlayList contents={addedContents && addedContents} setPlayContent={playerHandler} />

          {playContent && playerOpen && (
            <div className="w-xl h-xl">
              <div className='flex justify-center'>
                {playContent.type == "spotify" ? (
                  <SpotifyPlayer url={playContent.url!} />
                ) : (
                  <WebPlayer url={playContent.url!} />
                )}
              </div>

              <div className="w-full h-xl py-4">
                <h1 className="text-2xl py-2 font-bold">Comments</h1>
                <CommentForm content={playContent} onCommentAdded={handleNewComment} />
                <div className="h-fit py-4">
                  {playContent.comments && playContent.comments.length > 0 ? (
                    <div className="space-y-4">
                      {playContent.comments.map((c) => (
                        <div className="flex justify-between items-end">
                          <p className='w-64'>{c.comment}</p>
                          <span className="text-sm">{c.date}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    "No Comments"
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
