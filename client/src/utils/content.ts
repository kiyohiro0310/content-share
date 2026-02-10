import axios from "axios";
import type { AddedContentType, StoreContentType } from "../../type";

export const REQ_URL = import.meta.env.VITE_BACKEND_SERVER_URL ?? "http://localhost:3000";

// HTTP request
export async function storeContent(content: StoreContentType) {
  const response = await axios.post(`${REQ_URL}`, content);
  if (response.status != 200) return response.statusText;

  return true;
}

export async function postComment(post: {id: string, date: string; comment: string}) {
  const response = await axios.post(`${REQ_URL}/${post.id}`, post);
  if (response.status != 200) return response.statusText;

  return true;
}

export const organizeContentByDate = (rawItems: StoreContentType[]): AddedContentType[] => {
  const grouped = rawItems.reduce(
    (acc, item) => {
      const date = item.createdAt 
      ? new Date(item.createdAt).toLocaleDateString('en-AU') 
      : '01/02/2026';

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push({
        id: item.id,
        name: item.name,
        type: item.type,
        url: item.url,
        image: item.image || "",
        comments: item.comments.reverse(),
        user: item.user || "",
      });

      return acc;
    },
    {} as Record<string, StoreContentType[]>,
  );

  return Object.keys(grouped).map((date) => ({
    date: date,
    items: grouped[date],
  }));
};
