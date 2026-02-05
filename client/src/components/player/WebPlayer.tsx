import ReactPlayer from "react-player";

const WebPlayer = ({ url }: { url: string }) => {
  return (
    <div>
      <ReactPlayer src={url} width={500} height={300} />
    </div>
  );
};

export default WebPlayer;
