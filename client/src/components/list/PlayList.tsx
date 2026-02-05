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
        <div key={i} className='py-4'>
          <h1 className="font-bold text-lg py-2">{content.date}</h1>
          <div className="">
            {content.items.map((item, j) => (
              <div
                key={j}
                className="flex items-center space-x-3 w-full px-4 py-2 text-sm border-b-[0.5px] border-b-gray-400 dark:border-b-white cursor-pointer hover:text-green-300 transition duration-200"
                onClick={() => {
                  setPlayContent({
                    id: item.id,
                    type: item.type,
                    url: item.url,
                    comments: item.comments,
                  });
                }}
              >
                <img className="w-12 h-12" src={item.image} alt={item.name} />
                <div className='space-y-1'>
                  <p>{item.name}</p>
                  <p className='text-xs'>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</p>
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
