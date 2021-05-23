import axios from "axios";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import { IPost } from "../../libs/types";

const CreatePost = () => {
  // const { data: posts, error, mutate } = useSWR<IPost[]>("/posts");
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000);
    await axios("/posts", {
      method: "POST",
      data: {
        id,
        content: `${content} ${id}`,
      },
    });
    setContent("");
    // mutate();
    mutate("/posts");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mb-4 space-y-4 ">
      <textarea
        onChange={(e) => setContent(e.target.value)}
        value={content}
        placeholder="Type the post..."
        rows={3}
        className="p-1 text-white bg-transparent border"
      />
      <button className="w-32 p-1 ml-auto text-sm bg-gray-800 rounded-lg shadow-lg">
        Add Post
      </button>
    </form>
  );
};

export default CreatePost;
