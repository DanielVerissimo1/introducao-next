'use client'
import { useState } from 'react'

export default function Lampada() {
  const [ligada, setLigada] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 bg-gray-100 rounded-lg">
      <div className="text-8xl">
        {ligada ? '💡' : '🕯️'}
      </div>
      <button
        onClick={() => setLigada(!ligada)}
        className={`px-6 py-2 rounded-md text-white font-medium transition-colors ${
          ligada ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
        }`}
      >
        {ligada ? 'Desligar' : 'Ligar'}
      </button>
      <p className="text-gray-700">
        A lâmpada esta <span className="font-semibold">{ligada ? 'acesa' : 'apagada'}</span>
      </p>
    </div>
  )
}