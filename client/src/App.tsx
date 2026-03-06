import { useEffect, useState } from "react";
import PlayList from "./components/list/PlayList";
import { useAddedContent } from "./hooks/useAddedContent";
import type { PlayContentType } from "../type";
import "react-toastify/dist/ReactToastify.css"; // Don't forget this!
import { ToastContainer } from "react-toastify";
import Header from "./layout/Header";
import PlayerSection from "./components/player/PlayerSection";
import { motion, AnimatePresence } from "framer-motion";
import MobilePlayerSection from "./components/player/MobilePlayerSection";

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

  useEffect(() => {
    if (!playContent && addedContents && addedContents.length > 0) {
      const firstItem = addedContents[0].items[0];
      setPlayContent(firstItem);
      setPlayerOpen(true);
    }
  }, [addedContents, playContent]);

  return (
    <div className="py-4 overflow-x-hidden">
      <ToastContainer aria-label={undefined} position="bottom-right" autoClose={3000} theme="dark" />
      <Header mode={mode} setMode={setMode} />
      <div className="relative flex flex-col justify-center items-center w-full">
        <div className="flex overflow-auto">
          <PlayList contents={addedContents && addedContents} setPlayContent={playerHandler} />
          <AnimatePresence>
            {playContent && playerOpen && (
              <motion.div
                initial={{ y: "100%" }} // Start off-screen to the left
                animate={{ y: 0 }} // Slide into position
                exit={{ y: "100%" }} // Slide back out to the left
                transition={{ type: "tween", damping: 25, stiffness: 200 }}
                className="fixed inset-0 z-50 flex md:relative md:inset-auto md:z-0"
              >
                <PlayerSection playContent={playContent} handleNewComment={handleNewComment} />

                <MobilePlayerSection
                  playContent={playContent}
                  handleNewComment={handleNewComment}
                  setPlayerOpen={setPlayerOpen}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
