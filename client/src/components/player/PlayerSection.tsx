import type { PlayContentType } from "../../../type";
import CommentForm from "../CommentForm";
import SpotifyPlayer from "./SpotifyPlayer";
import WebPlayer from "./WebPlayer";

const PlayerSection = ({
  playContent,
  handleNewComment,
}: {
  playContent: PlayContentType;
  handleNewComment: (newComment: { date: string; comment: string }) => void;
}) => {
  return (
    <div className="hidden md:block w-xl h-xl">
      <div className="flex justify-center">
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
              {playContent.comments.map((c, i: number) => (
                <div key={i} className="flex justify-between items-end">
                  <p className="w-64">{c.comment}</p>
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
  );
};

export default PlayerSection;
