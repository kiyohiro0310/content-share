import { toast } from "react-toastify";
import type { SpotifyContentType } from "../../../type";
import { useAddedContent } from "../../hooks/useAddedContent";
import { storeContent } from "../../utils/content";

const SpotifyContentsList = ({ contents, onClick }: { contents: SpotifyContentType[]; onClick: () => void }) => {
  const { addedContents, setAddedContents } = useAddedContent();

  const handleClick = async (name: string, img: string, url: string, artists: {name: string}[]) => {
    const today = new Date().toLocaleDateString("en-AU");
    const dataExists = addedContents.some((content) => content.date === today);
    const newContent = {
      date: today,
      items: [{ name, image: img, url, artists, type: "spotify" }],
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

    await storeContent({ name, image: img, url, artists, type: "spotify", comments: [] });
    toast.success(`Song: ${name} has been added into playlist.`);
    onClick();
  };

  return (
    <div className="w-full lg:w-5xl flex flex-col absolute left-0 md:left-34 backdrop-blur-lg">
      {contents.map((item, i) => (
        <div key={i}>
          {item ? (
            <div className="">
              <div className="cursor-pointer border-b-[0.5px] border-b-gray-400 dark:border-b-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between p-2 pt-4">
                  <div className="flex items-start space-x-4">
                    <img
                      className="w-16"
                      src={item.album.images[0].url}
                      alt={item.name}
                      width={item.album.images[0].width}
                      height={item.album.images[0].height}
                    />
                    <div className="flex flex-col justify-start items-start">
                      <h1 className='text-xl'>{item.name}</h1>
                      <div className='flex text-sm'>
                        {item.artists.map((artist: { name: string }, index: number) => (
                          <div key={index}>{artist.name}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-8">
                    <button
                      className="font-bold cursor-pointer hover:text-yellow-300 transition-all duration-200"
                      onClick={() => handleClick(item.name, item.album.images[0].url, item.external_urls.spotify, item.artists)}
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
