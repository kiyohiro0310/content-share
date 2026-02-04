import axios from "axios";
import { createContext, useEffect, useState, type ReactNode } from "react";

const apikey = import.meta.env.VITE_GOOGLE_API_KEY;
import type { YouTubeContentType, YouTubeCtxType } from "../../type";

const YouTubeContext = createContext<YouTubeCtxType | undefined>(undefined);

export const YouTubeContentsProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [contents, setContents] = useState<YouTubeContentType[]>([]);

  useEffect(() => {
    async function searchContent(input: string) {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${input}&key=${apikey}`,
      );
      setContents(response.data.items);
    }
    if (search && search.length > 0) searchContent(search);
  }, [search]);

  return <YouTubeContext.Provider value={{ contents, setSearch, setContents }}>{children}</YouTubeContext.Provider>;
};

export default YouTubeContext;
