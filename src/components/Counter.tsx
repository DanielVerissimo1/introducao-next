'use client'

import { useState } from "react"

interface CounterProps {
    initialCount: number;
}

export default function Counter(Props: CounterProps) {
    const [count, setCount] = useState(Props.initialCount)

    return(
        <div >
            <h1 className="bg-blue-300 text-center text-white font-bold p-4 rounded-md"
            >Contagem: {count}
            </h1>
            <div className="flex items-center justify-center p-4">
                            <button className="bg-blue-500 text-white font-bold p-2 rounded-md m-2"
            onClick={()=>setCount(
                count+1)}>
                Incrementar
            </button>

            <button className="bg-red-500 text-white font-bold p-2 rounded-md m-2"
            onClick={()=>setCount(
                count-1)}>
                Decrementar
            </button>
            </div>

        </div>
    )
}