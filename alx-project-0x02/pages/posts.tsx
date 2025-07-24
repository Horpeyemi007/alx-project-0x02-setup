import React, { useEffect, useState } from "react";
import { PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching from JSONPlaceholder
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        const formattedPosts = data.map((post: PostProps) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));
        setPosts(formattedPosts);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="p-6 max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        {loading ? (
          <p className="text-gray-500">Loading posts...</p>
        ) : (
          posts.map((post, index) => <PostCard key={index} {...post} />)
        )}
      </div>
    </div>
  );
};

export default Posts;
