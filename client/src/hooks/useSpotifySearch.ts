import { useContext } from "react"
import SpotifyContext from "../provider/SpotifyContentsProvider"


export const useSpotifySearch = () => {
  const context = useContext(SpotifyContext);

  if (context == undefined) {
    throw new Error("Context is undefined.");
  }
  return context
}