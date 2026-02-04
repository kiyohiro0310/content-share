import ReactPlayer from "react-player";

const WebPlayer = ({ id }: { id: string }) => {
  return (
    <div>
      <ReactPlayer src={`https://www.youtube.com/watch?v=${id}`} width={500} height={300} />
      <div>Comments for YouTube {id}</div>
    </div>
  );
};

export default WebPlayer;
