"use client"
import { useState } from "react"

export default function Calculator() {
    const [display, setDisplay] = useState("")

    const backspace = () => {
        setDisplay(display.slice(0, -1))
    }

    const clearAll = () => {
        setDisplay("")
    }

    const toggleSign = () => {
        if (display.startsWith("-")) {
            setDisplay(display.substring(1))
        } else if (display !== "") {
            setDisplay("-" + display)
        }
    }

    const calculate = () => {
        try {
            if (display === "") return
            
            const lastChar = display.slice(-1)
            if (["+", "-", "*", "/"].includes(lastChar)) {
                alert("Expressão inválida")
                return
            }

            let result
            if (display.includes("+")) {
                result = display.split("+").reduce(
                    (acc, val) => acc + Number(val), 0)
            } else if (display.includes("-")) {
                const values = display.split("-").map(Number)
                result = values.reduce((acc, val, index) => index === 0 ? val : acc - val)
            } else if (display.includes("*")) {
                result = display.split("*").reduce((acc, val) => acc * Number(val), 1)
            } else if (display.includes("/")) {
                const values = display.split("/").map(Number)
                result = values.reduce((acc, val, index) => {
                    if (index === 0) return val
                    if (val === 0) throw new Error("Divisão por zero")
                    return acc / val
                })
            } else {
                return
            }

            setDisplay(result.toString())
        } catch (error) {
            alert("Erro ao calcular: " + (error instanceof Error ? error.message : "Expressão inválida"))
            clearAll()
        }
    }

    const addOperator = (operator: string) => {
        if (display === "" && operator !== "-") return
        
        const lastChar = display.slice(-1)
        if (["+", "-", "*", "/"].includes(lastChar)) {
            setDisplay(display.slice(0, -1) + operator)
        } else {
            setDisplay(display + operator)
        }
    }

    const addNumber = (num: string) => {
        if (num === "0" && display === "0") return
        setDisplay(display + num)
    }

    const btnBase = "rounded-full h-14 w-14 flex items-center justify-center text-xl font-medium transition-all duration-200"
    const btnNumber = `${btnBase} bg-gray-700 text-white hover:bg-gray-600 active:bg-gray-800 active:scale-95`
    const btnOperator = `${btnBase} bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 active:scale-95`
    const btnFunction = `${btnBase} bg-gray-400 text-black hover:bg-gray-300 active:bg-gray-500 active:scale-95`
    const btnZero = `${btnBase} bg-gray-700 text-white hover:bg-gray-600 active:bg-gray-800 active:scale-95 col-span-2 w-full pl-5 justify-start`

    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <div className="bg-black rounded-3xl p-5 w-72 shadow-xl shadow-gray-900/50">
                
                <div className="text-white text-right text-5xl font-light mb-6 p-3 overflow-hidden rounded-lg bg-gray-900/50 backdrop-blur-sm">
                    <div className="animate-pulse-slow">
                        {display || <span className="opacity-50">0</span>}
                    </div>
                </div>

                {/* Teclado com efeitos melhorados */}
                <div className="grid grid-cols-4 gap-3">
                    {/* Linha 1 */}
                    <button 
                        onClick={clearAll}
                        className={btnFunction}
                    >
                        CE
                    </button>
                    <button 
                        onClick={toggleSign}
                        className={btnFunction}
                    >
                        +/-
                    </button>
                    <button 
                        onClick={backspace}
                        className={btnFunction}
                    >
                        ⌫
                    </button>
                    <button 
                        onClick={() => addOperator("/")}
                        className={btnOperator}
                    >
                        ÷
                    </button>

                    {/* Linha 2 */}
                    {[7, 8, 9].map(num => (
                        <button
                            key={num}
                            onClick={() => addNumber(num.toString())}
                            className={btnNumber}
                        >
                            {num}
                        </button>
                    ))}
                    <button 
                        onClick={() => addOperator("*")}
                        className={btnOperator}
                    >
                        ×
                    </button>

                    {/* Linha 3 */}
                    {[4, 5, 6].map(num => (
                        <button
                            key={num}
                            onClick={() => addNumber(num.toString())}
                            className={btnNumber}
                        >
                            {num}
                        </button>
                    ))}
                    <button 
                        onClick={() => addOperator("-")}
                        className={btnOperator}
                    >
                        -
                    </button>

                    {/* Linha 4 */}
                    {[1, 2, 3].map(num => (
                        <button
                            key={num}
                            onClick={() => addNumber(num.toString())}
                            className={btnNumber}
                        >
                            {num}
                        </button>
                    ))}
                    <button 
                        onClick={() => addOperator("+")}
                        className={btnOperator}
                    >
                        +
                    </button>

                    {/* Linha 5 */}
                    <button 
                        onClick={() => addNumber("0")}
                        className={btnZero}
                    >
                        0
                    </button>
                    <button 
                        onClick={() => addNumber(".")}
                        className={btnNumber}
                    >
                        .
                    </button>
                    <button 
                        onClick={calculate}
                        className={btnOperator}
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    )
}