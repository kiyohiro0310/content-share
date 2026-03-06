import type { PlayContentType } from "../../../type";
import CommentForm from "../CommentForm";
import SpotifyPlayer from "./SpotifyPlayer";
import WebPlayer from "./WebPlayer";
import { IoIosArrowDown } from "react-icons/io";

const MobilePlayerSection = ({
  playContent,
  handleNewComment,
  setPlayerOpen,
}: {
  playContent: PlayContentType;
  handleNewComment: (newComment: { date: string; comment: string }) => void;
  setPlayerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="md:hidden w-full h-[80vh] absolute bottom-0 shadow-lg backdrop-blur-lg">
      <div onClick={() => setPlayerOpen(false)} className="bg-teal-700 flex justify-center">
        <IoIosArrowDown size={30} className="text-white" />
      </div>
      <div className="md:hidden w-full">
        <div className="flex w-screen">
          {playContent.type == "spotify" ? (
            <SpotifyPlayer url={playContent.url!} />
          ) : (
            <WebPlayer url={playContent.url!} />
          )}
        </div>

        <div className="w-full h-xl py-4 px-4">
          <h1 className="text-2xl py-2 font-bold">Comments</h1>
          <CommentForm content={playContent} onCommentAdded={handleNewComment} />
          <div className="h-64 py-4 overflow-y-auto border-t border-gray-100/20">
            {playContent.comments && playContent.comments.length > 0 ? (
              <div className="space-y-4">
                {playContent.comments.map((c, i: number) => (
                  <div key={i} className="flex justify-between items-end border-b border-gray-100/10 pb-2">
                    <p className="w-64 text-sm wrap-break-word">{c.comment}</p>
                    <span className="text-[10px] text-gray-400">{c.date}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 italic">No Comments yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePlayerSection;
