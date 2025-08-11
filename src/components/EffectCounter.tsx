'use client';
import React, { useState, useEffect } from 'react';
export default function EffectCounter() {

    const [count, setCount] = useState(0);
    useEffect(() => {
        alert("UseEffect foi chamado!");
    }, [count]);               
    return (

        <div className="max-w-sm mx-auto p-6 bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg shadow-sm border border-blue-200">
            <h1>Contagem: {count}</h1>
            <button onClick={()=>{setCount(count+1)}}
            className='bg-blue-500 cursor-pointer text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300'>
                incrementar</button>
        </div>
    );
}