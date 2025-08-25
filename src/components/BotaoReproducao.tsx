"use client";
import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function BotaoReproducao() {
  const [estaTocando, setEstaTocando] = useState(false);

  const toggleReproducao = () => {
    setEstaTocando((estadoAnterior) => !estadoAnterior);
  };

  return (
    <button
      onClick={toggleReproducao}
      className={`
        flex items-center space-x-2 p-2 rounded-md transition-colors
        ${estaTocando
          ? "text-blue-500 bg-blue-100 hover:bg-blue-200"
          : "text-gray-400 hover:text-gray-500 bg-gray-50 hover:bg-gray-100"
        }
      `}
    >
      <span className="text-lg">
        {estaTocando ? <FaPause /> : <FaPlay />}
      </span>
      <span className="font-medium">
        {estaTocando ? "Pausar" : "Reproduzir"}
      </span>
    </button>
  );
}