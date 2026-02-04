import type { Dispatch, SetStateAction } from "react";

const ModeSelect = ({
  mode,
  isModeOn,
  onMode,
}: {
  mode: string;
  isModeOn: boolean;
  onMode: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div
      className={`${isModeOn ? mode == "Spotify" ? "bg-green-500 text-white" : "bg-red-500 text-white" : ""} cursor-pointer font-bold px-4 py-2 rounded-lg`}
      onClick={() => {
        onMode(mode);
      }}
    >
      {mode}
    </div>
  );
};

export default ModeSelect;
