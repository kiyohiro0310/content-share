import { useContext } from "react"
import AddedContentsContext from "../provider/AddedContentsProvider"

export const useAddedContent = () => {
    const context = useContext(AddedContentsContext);

    if (context === undefined) throw new Error("Added context not found.");
    
    return context;
}