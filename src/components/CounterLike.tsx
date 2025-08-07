'use client'
import { MdFavorite } from "react-icons/md";
import { useState } from "react"

interface CounterProps {
    initialCount: number;
}

export default function CounterLike(Props: CounterProps) {
    const [count, setCount] = useState(Props.initialCount)

    return(
        <div className="max-w-sm mx-auto p-6 bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg shadow-sm border border-blue-200">
            <h1 className="bg-blue-400 text-center text-white font-bold py-3 px-4 rounded-md text-lg shadow-inner">
                 {count} Likes 
            </h1>

            <div className="flex items-center justify-center p-4">
                <button 
                    className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-bold p-3 rounded-full shadow-md transition-transform duration-200 hover:scale-110 active:scale-95"
                    onClick={() => setCount(count + 1)}
                >
                    <MdFavorite className="text-2xl" />
                </button>
            </div>
        </div>
    )
}