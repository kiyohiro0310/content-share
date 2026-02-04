import axios from 'axios';
import type { StoreContentType } from '../../type';

export const REQ_URL = import.meta.env.VITE_BACKEND_SERVER_URL ?? 'http://localhost:3000';

export async function storeContent(content: StoreContentType) {
  const response = await axios.post(`${REQ_URL}`, content);
  if (response.status != 200) return response.statusText;

  return true;
}