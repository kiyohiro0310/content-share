import { toast } from "react-toastify";
import type { YouTubeContentType } from "../../../type";
import { useAddedContent } from "../../hooks/useAddedContent";
import { storeContent } from "../../utils/content";
import { useAuth } from "@workos-inc/authkit-react";

const YouTubeContentsList = ({ contents }: { contents: YouTubeContentType[] }) => {
  const { addedContents, setAddedContents } = useAddedContent();
  const { user } = useAuth();

  const handleClick = async (id: string, name: string, img: string, url: string) => {
    if (user == null) toast.error("You need to sign in to add song.");
    else {
      const today = new Date().toLocaleDateString("en-AU");
      const dataExists = addedContents.some((content) => content.date === today);
      const newContent = {
        date: today,
        items: [{ id, name, image: img, url, type: "youtube" }],
      };
      if (!dataExists) setAddedContents([...addedContents, newContent]);
      else {
        const updatedContents = [
          ...addedContents.map((content) => {
            if (content.date === today) {
              return {
                ...content,
                items: [...content.items, { id, name, image: img, url, type: "youtube" }],
              };
            } else {
              return content;
            }
          }),
        ];
        setAddedContents(updatedContents);
      }
      await storeContent({
        name,
        image: img,
        url: `https://www.youtube.com/watch?v=${id}`,
        type: "youtube",
        comments: [],
        user: `${user.firstName} ${user.lastName}`,
      });
      toast.success(`Video: ${name} has been added into playlist.`);
    }
  };
  return (
    <div className="flex flex-col absolute backdrop-blur-lg">
      {contents.map((item, i) => (
        <div key={i}>
          {item && item.id.videoId && (
            <div className="">
              <div className="cursor-pointer border-b-[0.5px] border-b-gray-400 dark:border-b-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-16"
                      src={item.snippet.thumbnails?.default.url}
                      alt={item.snippet.title}
                      width={item.snippet.thumbnails?.default.width}
                      height={item.snippet.thumbnails?.default.height}
                    />
                    <h1 className="w-[88%]">{item.snippet.title}</h1>
                  </div>
                  <div className="flex space-x-8">
                    <div
                      className="w-32 px-2 font-bold cursor-pointer hover:text-yellow-300 transition-all duration-200"
                      onClick={() =>
                        handleClick(
                          item.id.videoId,
                          item.snippet.title,
                          item.snippet.thumbnails!.default.url,
                          item.id.videoId,
                        )
                      }
                    >
                      Add to Playlist
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default YouTubeContentsList;
