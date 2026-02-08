import { useState, type ChangeEvent } from "react";
import { useYouTubeSearch } from "../../hooks/useYouTubeSearch";
import YouTubeContentsList from "../list/YouTubeContentsList";
import { RxCross2 } from "react-icons/rx";

const YouTubeSearch = () => {
  const { setSearch, contents, setContents } = useYouTubeSearch();

  const [input, setInput] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchVal = (e.target as HTMLInputElement).value;
    if (!searchVal) setContents([]);
    setInput(searchVal);
    setSearch(searchVal);
  };

  const handleClose = () => {
    setContents([]);
    setInput("");
  };

  return (
    <div className='w-full'>
      <form className="flex space-x-2 items-center">
        <input
          className="border-[0.5px] w-full h-10 rounded-md text-lg p-2 outline-none"
          type="text"
          onChange={handleSearch}
          value={input}
          placeholder='Search YouTube'
        />
        {input && input.length > 0 && (
          <div
            onClick={handleClose}
            className="border-[0.7px] border-red-500 p-[10px] rounded-xl hover:bg-red-500 transition duration-200 cursor-pointer"
          >
            <RxCross2 className="text-xl font-black" />
          </div>
        )}
      </form>
      <YouTubeContentsList contents={contents} />
    </div>
  );
};

export default YouTubeSearch;
