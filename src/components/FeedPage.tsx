"use client";

import { useState } from "react";
import PostCard from "./PostCard";

interface Post {
  id: number;
  autor: string;
  conteudo: string;
  likes: number;
}

export default function FeedPage() {

  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      autor: "Davi",
      conteudo: "Sou corinthiano raiz !",
      likes: 0
    },
    {
      id: 2,
      autor: "Tinho",
      conteudo: "Caguei na cama de novo, alguém me ajuda pfv",
      likes: 0
    }
  ]);

  const handleLike = (postId: number) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Feed Social
        </h1>
        
        <div className="space-y-6">
          {posts.map(post => (
            <PostCard
              key={post.id}
              id={post.id}
              autor={post.autor}
              conteudo={post.conteudo}
              likes={post.likes}
              onLike={handleLike}
            />
          ))}
        </div>

        
        <div className="mt-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Estatísticas do Feed
          </h2>
          <p className="text-gray-600">
            Total de posts: {posts.length} | 
            Total de likes: {posts.reduce((total, post) => total + post.likes, 0)}
          </p>
        </div>
      </div>
    </div>
  );
}