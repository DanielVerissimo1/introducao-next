"use client"
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function LikeButton() {
    
    const [isLiked, setIsLiked] = useState(false) 
    
    return (
    <button
        onClick={() => {setIsLiked(!isLiked)}}
      className={`flex items-center
        space-x-2 p-2 rounded-md
        
        bg-gray-50 hover:bg-gray-100
        ${isLiked ?  
            "text-red-500  bg-red-100 hover:bg-red-200" : 
            "text-gray-400 hover:text-gray-500 bg-gray-50 hover:bg-gray-100"}
        `}
    
    >
      <span>{isLiked ? <FaHeart/> : <FaRegHeart/> }</span>
      <span>{isLiked ? "Curtido" : "Curtir" }</span>
    </button>
  );
}