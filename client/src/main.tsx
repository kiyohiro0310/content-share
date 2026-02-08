import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { YouTubeContentsProvider } from "./provider/YouTubeContentsProvider.tsx";
import { SpotifyContentsProvider } from "./provider/SpotifyContentsProvider.tsx";
import { AddedContentsProvider } from "./provider/AddedContentsProvider.tsx";
import { AuthKitProvider } from "@workos-inc/authkit-react";

createRoot(document.getElementById("root")!).render(
  <AuthKitProvider clientId={import.meta.env.VITE_WORKOS_CLIENT_ID}>
    <AddedContentsProvider>
      <SpotifyContentsProvider>
        <YouTubeContentsProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </YouTubeContentsProvider>
      </SpotifyContentsProvider>
    </AddedContentsProvider>
  </AuthKitProvider>,
);
