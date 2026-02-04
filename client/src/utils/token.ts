import axios from 'axios';

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
export const getSpotifyToken = async () => {
  const url = "https://accounts.spotify.com/api/token"; 

  const encodedCredentials = btoa(`${clientId}:${clientSecret}`);

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  try {
    const response = await axios.post(url, params, {
      headers: {
        "Authorization": `Basic ${encodedCredentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return response.data.access_token;
  } catch (error) {
    // Interview tip: Always check for error.response in axios
    return error
  }
};