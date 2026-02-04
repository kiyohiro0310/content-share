import type { Dispatch, SetStateAction } from "react";
import type { AddedContentType, PlayContentType } from "../../../type";

const PlayList = ({
  contents,
  setPlayContent,
}: {
  contents: AddedContentType[];
  setPlayContent: Dispatch<SetStateAction<PlayContentType | undefined>>;
}) => {
  const today = new Date().toLocaleDateString("en-AU");

  return (
    <div className="px-4 h-screen lg:w-[20vw] border-r-[0.5px]">
      {contents.length == 0 && (
        <div>
          <h1 className="font-bold text-xl pb-4">{today}</h1>
          <p>No Contents</p>
        </div>
      )}
      {contents.map((content, i) => (
        <div key={i}>
          <h1 className="font-bold text-lg pb-4">{content.date}</h1>
          <div className="">
            {content.items.map((item, j) => (
              <div
                key={j}
                className="flex items-center space-x-3 w-full px-4 py-2 text-sm border-b-[0.5px] border-b-gray-400 dark:border-b-white cursor-pointer hover:text-green-300 transition duration-200"
                onClick={() => {
                  if (item.type == "youtube") {
                    setPlayContent({
                      type: "youtube",
                      id: item.url,
                    });
                  } else {
                    setPlayContent({
                      type: "spotify",
                      url: item.url,
                    });
                  }
                }}
              >
                <img className="w-12 h-12" src={item.image} alt="" />
                <div>
                  <p>{item.name}</p>
                  <p>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</p>
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
