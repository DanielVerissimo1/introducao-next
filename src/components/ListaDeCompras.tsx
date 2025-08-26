"use client";

import { useState } from "react";

const itensIniciais = [
  { id: 1, nome: "Arroz", comprado: false },
  { id: 2, nome: "Feijão", comprado: false },
  { id: 3, nome: "Macarrão", comprado: false },
  { id: 4, nome: "Mortadela", comprado: false },
];

export default function ListaDeCompras() {
  const [itens, setItens] = useState(itensIniciais);

  const toggleComprado = (id: number) => {
    setItens(itens.map(item =>
      item.id === id ? { ...item, comprado: !item.comprado } : item
    ));
  };

  return (
    <div className="p-4">
      <h1 className="text-center font-bold text-xl md:text-4xl py-4 text-gray-700">
        Lista de Compras
      </h1>
      <ul className="list-none p-4 flex flex-col gap-3">
        {itens.map(item => (
          <li key={item.id} className="flex items-center gap-3">
            <button
              onClick={() => toggleComprado(item.id)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors cursor-pointer ${
                item.comprado
                  ? "bg-green-500 border-green-500 text-white"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              {item.comprado && "✓"}
            </button>
            <span className={item.comprado ? "line-through text-gray-500" : ""}>
              {item.nome}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
