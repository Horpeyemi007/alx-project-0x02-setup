import React, { useState } from "react";
import Card from "@/components/common/Card";
import { CardProps, PostData } from "@/interfaces";
import PostModal from "@/components/common/PostModal";

const Home: React.FC = () => {
  const [posts, setPost] = useState<PostData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: PostData) => {
    setPost([post, ...posts]);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Home Page</h1>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          + New Post
        </button>
      </div>

      {/* post modal here */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      {posts.length === 0 ? (
        <p className="text-red-500 font-semibold text-2xl">No posts yet.</p>
      ) : (
        <div className="space-y-4">
          {posts.map(({ title, content }: CardProps, key: number) => (
            <Card title={title} content={content} key={key} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
