import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700">{content}</p>
      <div className="text-sm text-gray-500">User ID: {userId}</div>
    </div>
  );
};

export default PostCard;
