import axios from "axios";
import { createContext, useEffect, useState, type ReactNode } from "react";
import type { SpotifyContentType, SpotifyCtxType } from "../../type";
import { getSpotifyToken } from "../utils/token";

const SpotifyContext = createContext<SpotifyCtxType | undefined>(undefined);

export const SpotifyContentsProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [contents, setContents] = useState<SpotifyContentType[]>([]);

  useEffect(() => {
    async function searchContent(input: string) {
      const accessToken = await getSpotifyToken();

      const response = await axios.get(`https://api.spotify.com/v1/search?q=${input}&type=track`, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
      setContents(response.data.tracks.items);
    }
    if (search && search.length > 0) searchContent(search);
  }, [search]);

  return <SpotifyContext.Provider value={{ contents, setSearch, setContents }}>{children}</SpotifyContext.Provider>;
};

export default SpotifyContext;
