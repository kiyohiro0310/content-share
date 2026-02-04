const SpotifyPlayer = ({ url }: { url: string }) => {
  const id = url.replace("https://open.spotify.com/track/", "");
  const embedUrl = url.replace("open.spotify.com", "open.spotify.com/embed");
  console.log(`Store ${id} in database`);
  return (
    <div>
      <iframe
        className="rounded-xl"
        src={embedUrl}
        width={500}
        height={352}
        allow="encrypted-media"
        loading="lazy"
      ></iframe>
      <div className="">
        <h1 className="py-2 font-bold text-xl">Comments</h1>
        Comments for {id}
      </div>
    </div>
  );
};

export default SpotifyPlayer;
