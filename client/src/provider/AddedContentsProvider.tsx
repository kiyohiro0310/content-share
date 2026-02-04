import { createContext, useEffect, useState, type ReactNode } from "react";
import type { AddedContentType, AddedCtxType } from "../../type";
import { organizeContentByDate, REQ_URL } from "../utils/content";
import axios from 'axios';

const AddedContentsContext = createContext<AddedCtxType | undefined>(undefined);

export const AddedContentsProvider = ({ children }: { children: ReactNode }) => {
  const [addedContents, setAddedContents] = useState<AddedContentType[]>([]);
  useEffect(() => {
    async function getAllContent() {
      const response = await axios.get(REQ_URL);
      console.log(response);
      const organizedData = organizeContentByDate(response.data);
      setAddedContents(organizedData);
    }
    getAllContent();
  }, []);
  return (
    <AddedContentsContext.Provider value={{ addedContents, setAddedContents }}>
      {children}
    </AddedContentsContext.Provider>
  );
};

export default AddedContentsContext;
