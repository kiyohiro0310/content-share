import type { AddedContentType, PlayContentType } from "../../../type";

const PlayList = ({
  contents,
  setPlayContent,
}: {
  contents: AddedContentType[];
  setPlayContent: (content: PlayContentType) => void;
}) => {
  return (
    <div className="px-4">
      {contents.length == 0 && (
        <div>
          <p>No Contents</p>
        </div>
      )}
      {contents.map((content, i) => (
        <div key={i} className="py-4">
          <h1 className="font-bold text-lg py-2">{content.date}</h1>
          <div className="grid grid-cols-2 gap-4">
            {content.items.map((item, j) => (
              <div
                key={j}
                className="h-18 flex items-start overflow-clip space-x-3 w-full px-4 text-sm border-b-[0.5px] border-b-gray-400 dark:border-b-white cursor-pointer hover:text-green-300 transition duration-200"
                onClick={() => {
                  setPlayContent({
                    id: item.id,
                    type: item.type,
                    url: item.url,
                    comments: item.comments,
                  });
                }}
              >
                <img className="w-15 h-15" src={item.image} alt={item.name} />
                <div className="space-y-1">
                  <p>{item.name}</p>
                  {(item.artists && item.artists.length > 0) && (
                    <p className='text-xs'>
                      {item.artists.map((artist: {name: string}, index: number) => (
                        <span key={index}>{artist.name}</span>
                      ))}
                    </p>
                  )}

                  <p className="text-xs">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayList;
