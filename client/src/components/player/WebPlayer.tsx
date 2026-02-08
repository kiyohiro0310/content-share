import ReactPlayer from "react-player";

const WebPlayer = ({ url }: { url: string }) => {
  return (
    <div>
      <ReactPlayer src={url} width={500} height={300} autoPlay />
    </div>
  );
};

export default WebPlayer;
