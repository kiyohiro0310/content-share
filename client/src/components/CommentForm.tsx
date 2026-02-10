import { useState, type FormEvent } from "react";
import { postComment } from "../utils/content";
import { dateForComment } from "../utils/date";
import type { PlayContentType } from "../../type";
import { toast } from "react-toastify";

const CommentForm = ({
  content,
  onCommentAdded,
}: {
  content: PlayContentType;
  onCommentAdded: (c: { date: string; comment: string }) => void;
}) => {
  const [comment, setComment] = useState("");

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value);
  };
  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const date = dateForComment;
    const res = await postComment({ id: content.id!, date, comment });
    if (res) {
      onCommentAdded({ date, comment });
      setComment("");
      toast.success("Comment posted");
    }
  }

  return (
    <form onSubmit={submitHandler} className="flex space-x-4 w-full">
      <input type="text" value={comment} onChange={changeHandler} className="w-full p-2 text-black border-b-[0.5px] dark:border-b-white dark:text-white outline-none" />
      <button type="submit" className="px-8 py-2 bg-black text-yellow-300 font-bold rounded-lg hover:bg-yellow-300 hover:text-black transition-all duration-200 cursor-pointer">
        Post
      </button>
    </form>
  );
};

export default CommentForm;
