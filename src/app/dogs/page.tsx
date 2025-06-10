'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Postspage() {
  const [dogUrl, setDogUrl] = useState('');

  const fetchDog = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    setDogUrl(data.message);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Random Dog</h1>

      <div className="bg-violet-300 p-6 rounded-2xl shadow-md flex flex-col items-center">
        {dogUrl && (
          <Image
            src={dogUrl}
            alt="Imagem de cachorro"
            width={300}
            height={300}
            className="rounded-lg mb-4"
          />
        )}

        <button
          className="bg-white text-violet-700 font-semibold py-2 px-4 rounded hover:bg-violet-100 transition"
          onClick={fetchDog}
        >
          Buscar cachorro
        </button>
      </div>
    </div>
  );
}
