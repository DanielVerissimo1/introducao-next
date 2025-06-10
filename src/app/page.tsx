'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Page() {
  const [dogUrl, setDogUrl] = useState('');

  const fetchDog = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    setDogUrl(data.message);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Cachorros</h1>

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
        onClick={fetchDog}
        className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600 transition"
      >
        Buscar cachorro
      </button>
    </div>
  );
}
