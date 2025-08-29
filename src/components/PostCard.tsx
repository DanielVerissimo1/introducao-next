"use client";

import { FaHeart, FaRegHeart } from "react-icons/fa";

interface PostCardProps {
  id: number;
  autor: string;
  conteudo: string;
  likes: number;
  onLike: (postId: number) => void;
}

export default function PostCard({ id, autor, conteudo, likes, onLike }: PostCardProps) {
 
  const handleLikeClick = () => {
    onLike(id); // Chama função passada pelo pai, passando o ID 
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{autor}</h3>
        <span className="text-sm text-gray-500">há 2 horas</span>
      </div>

    
      <p className="text-gray-700 mb-4 leading-relaxed">
        {conteudo}
      </p>

     
      <div className="flex items-center justify-between border-t pt-4">

        <button
          onClick={handleLikeClick}
          className={`flex items-center space-x-2 p-2 rounded-md transition-colors cursor-pointer
            ${likes > 0 ? 
              "text-red-500 bg-red-50 hover:bg-red-100" : 
              "text-gray-400 hover:text-gray-500 bg-gray-50 hover:bg-gray-100"}
          `}
        >
          <span>{likes > 0 ? <FaHeart /> : <FaRegHeart />}</span>
          <span className="text-sm font-medium">
            {likes > 0 ? "Curtido" : "Curtir"}
          </span>
        </button>


        <div className="flex items-center space-x-1">
          <FaHeart className="text-red-500 text-sm" />
          <span className="text-sm text-gray-600">
            {likes} {likes === 1 ? 'curtida' : 'curtidas'}
          </span>
        </div>
      </div>

    </div>
  );
}