import { useContext } from "react"
import ContentContext from "../provider/YouTubeContentsProvider"

export const useYouTubeSearch = () => {
    const context = useContext(ContentContext);

    if (context == undefined) {
        throw new Error("useYouTubeSearch must be sued within a provider.");
    }
    return context;

}
