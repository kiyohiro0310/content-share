import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { YouTubeContentsProvider } from "./provider/YouTubeContentsProvider.tsx";
import { SpotifyContentsProvider } from "./provider/SpotifyContentsProvider.tsx";
import { AddedContentsProvider } from "./provider/AddedContentsProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <AddedContentsProvider>
    <SpotifyContentsProvider>
      <YouTubeContentsProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </YouTubeContentsProvider>
    </SpotifyContentsProvider>
  </AddedContentsProvider>
);
