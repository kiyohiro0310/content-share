
const SpotifyPlayer = ({ url }: { url: string }) => {
  const embedUrl = url.replace("open.spotify.com", "open.spotify.com/embed");
  return (
    <div>
      <iframe
        className="rounded-2xl w-screen md:w-full"
        src={embedUrl}
        width={500}
        height={352}
        allow="encrypted-media"
        loading="lazy"
      ></iframe>
      
    </div>
  );
};

export default SpotifyPlayer;
