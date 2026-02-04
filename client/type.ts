import type { Dispatch, SetStateAction } from "react";

export interface YouTubeCtxType {
  contents: YouTubeContentType[];
  setSearch: Dispatch<SetStateAction<string>>;
  setContents: Dispatch<SetStateAction<YouTubeContentType[]>>;
}

export interface SpotifyCtxType {
  contents: SpotifyContentType[];
  setSearch: Dispatch<SetStateAction<string>>;
  setContents: Dispatch<SetStateAction<SpotifyContentType[]>>;
}

export type YouTubeContentType = {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails?: {
      default: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
};

export type SpotifyContentType = {
  album: {
    images: {
      url: string;
      width: number;
      height: number;
    }[];
  };
  artists: { name: string }[];
  name: string;
  external_urls: {
    spotify: string;
  };
  uri: string;
};

export type AddedContentType = {
  date: string;
  items: {
    id?: string;
    name: string;
    type: string;
    url: string;
    image: string;
  }[];
};

export type StoreContentType = {
  id?: string;
  name: string;
  type: string;
  url: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
};

export interface AddedCtxType {
  addedContents: AddedContentType[];
  setAddedContents: Dispatch<SetStateAction<AddedContentType[]>>;
}

export type PlayContentType = {
  type: string;
  id?: string;
  url?: string;
};
