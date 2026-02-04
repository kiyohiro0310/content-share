import type { YouTubeContentType } from "../../../type";
import { useAddedContent } from "../../hooks/useAddedContent";

const YouTubeContentsList = ({ contents }: { contents: YouTubeContentType[] }) => {
  const { addedContents, setAddedContents } = useAddedContent();

  const handleClick = (id: string, name: string, img: string, url: string) => {
    const today = new Date().toLocaleDateString("en-AU");
    const dataExists = addedContents.some((content) => content.date === today);

    if (!dataExists) {
      const newContent = {
        date: today,
        items: [{id, name, image: img, url, type: "youtube" }],
      };
      setAddedContents([...addedContents, newContent]);
    } else {
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
  };
  return (
    <div className="">
      {contents.map((item, i) => (
        <div key={i}>
          {item ? (
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
                      className="w-32 px-2 font-bold cursor-pointer hover:text-green-300 transition-all duration-200"
                      onClick={() => handleClick(item.id.videoId, item.snippet.title, item.snippet.thumbnails!.default.url, item.id.videoId)}
                    >
                      Add to Playlist
                    </div>
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

export default YouTubeContentsList;
