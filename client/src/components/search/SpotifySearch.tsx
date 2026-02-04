import { useState, type ChangeEvent } from "react";
import { useSpotifySearch } from "../../hooks/useSpotifySearch";
import SpotifyContentsList from "../list/SpotifyContentsList";
import { RxCross2 } from "react-icons/rx";


const SpotifySearch = () => {
  const [input, setInput] = useState("");
  const { setSearch, contents, setContents } = useSpotifySearch();

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
    <div className="w-full">
      <h1 className="text-xl font-bold">Search Spotify</h1>
      <form className="flex space-x-2 items-center">
        <input
          className="border-[0.5px] w-full h-10 rounded-md text-lg p-2 outline-none"
          type="text"
          onChange={handleSearch}
          value={input}
        />
        {input && input.length > 0 && (
          <div
            onClick={handleClose}
            className="border-[0.7px] border-green-500 p-[10px] rounded-xl hover:bg-green-500 transition duration-200 cursor-pointer"
          >
            <RxCross2 className="text-xl font-black" />
          </div>
        )}
      </form>
      <SpotifyContentsList contents={contents} />
    </div>
  );
};

export default SpotifySearch;
