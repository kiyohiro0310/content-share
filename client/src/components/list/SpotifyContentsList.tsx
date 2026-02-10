import { toast } from "react-toastify";
import type { SpotifyContentType } from "../../../type";
import { useAddedContent } from "../../hooks/useAddedContent";
import { storeContent } from "../../utils/content";
import { useAuth } from "@workos-inc/authkit-react";

const SpotifyContentsList = ({ contents }: { contents: SpotifyContentType[] }) => {
  const { addedContents, setAddedContents } = useAddedContent();
  const { user } = useAuth();

  const handleClick = async (name: string, img: string, url: string) => {
    if (user == null) toast.error("You need to sign in to add song.");
    else {
      const today = new Date().toLocaleDateString("en-AU");
      const dataExists = addedContents.some((content) => content.date === today);
      const newContent = {
        date: today,
        items: [{ name, image: img, url, type: "spotify" }],
      };
      if (!dataExists) setAddedContents([...addedContents, newContent]);
      else {
        const updatedContents = [
          ...addedContents.map((content) => {
            if (content.date === today) {
              return {
                ...content,
                items: [...content.items, { name, image: img, url, type: "spotify" }],
              };
            } else {
              return content;
            }
          }),
        ];
        setAddedContents(updatedContents);
      }

      await storeContent({ name, image: img, url, type: "spotify", comments: [], user: `${user.firstName} ${user.lastName}`});
      toast.success(`Song: ${name} has been added into playlist.`);
    }
  };

  return (
    <div className="w-5xl flex flex-col absolute backdrop-blur-lg">
      {contents.map((item, i) => (
        <div key={i}>
          {item ? (
            <div className="">
              <div className="cursor-pointer border-b-[0.5px] border-b-gray-400 dark:border-b-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-16"
                      src={item.album.images[0].url}
                      alt={item.name}
                      width={item.album.images[0].width}
                      height={item.album.images[0].height}
                    />
                    <h1>{item.name}</h1>
                  </div>

                  <div className="flex space-x-8">
                    <button
                      className="font-bold cursor-pointer hover:text-yellow-300 transition-all duration-200"
                      onClick={() => handleClick(item.name, item.album.images[0].url, item.external_urls.spotify)}
                    >
                      Add to Playlist
                    </button>
                    <a href={item.uri}>Play with Spotify</a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SpotifyContentsList;
