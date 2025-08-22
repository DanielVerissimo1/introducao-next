"use client";
import { handleClientScriptLoad } from "next/script";
import { useState } from "react";

export default function MiniDisplay() {
  const [display, setDisplay] = useState("");


  const handleOperatorClick = (operator: string) => {
    //Não deixo o user digitar um operador diferente
    // do primeiro operador que ele digitou
    const operators = ["+", "-", "*", "/"]

    const disableOperators = operators.filter((op) => op !== operator)
    // disableOperators = ["-", "*", "/"]

    // Se a tela já tem um operador diferente, não faz nada
    const hasAnotherOperator = disableOperators.some(
      (op) => display.includes(op)
    )
    if(hasAnotherOperator) return

    setDisplay(display + operator)

  }



  const backspace = () => {
    setDisplay(display.slice(0, -1));
  };// "+" "-"

  // string = "olá mundo"
  // string.includes("45") -> false

  const calculate = () => {
    if (display.includes("+")) {
      sun();
    } else if (display.includes("-")) {
      subtraction();
    } else if (display.includes("*")) {
      product();
    }else if (display.includes("/")) {
      division();
    }
  };

  const sun = () => {
    const values = display.split("+"); //"55+67" -> ["1", "2", "3", "4"]

    const result = values.reduce(
      (acumuladora, valorAtual) => acumuladora + Number(valorAtual),
      0
    );
    setDisplay(String(result));
  };

  // Fução para a operação de Subtração
  const subtraction = () => {
    const values = display.split("-"); //"55+67" -> ["1", "1"]
    const numberValues = values.map((value) => Number(value)); // [1, 1]

    const result = numberValues.reduce(
      (acumuladora, valorAtual) => acumuladora - valorAtual
    );
    setDisplay(String(result));
  };
  // Fução para a operação de Multiplicação
  const product = () => {
    const values = display.split("*"); //"55+67" -> ["1", "1"]
    const numberValues = values.map((value) => Number(value)); // [1, 1]

    const result = numberValues.reduce(
      (acumuladora, valorAtual) => acumuladora * valorAtual
    );
    setDisplay(String(result));
  };

  // Fução para a operação de Divisão
  const division = () => {
    const values = display.split("/"); // 1 - 1 -> ["1", "1"] 
    const numberValues = values.map((value) => Number(value)); // [1, 1]


    if(numberValues[0] === 0) {
        setDisplay("0")
        return
    }
    
    // string = "olá, jonas" -> string.includes("olá") -> true
    if(numberValues.includes(0)) {
        setDisplay("Divisão por 0")
        return
    }

    

    const result = numberValues.reduce(
      (acumuladora, valorAtual) => acumuladora / valorAtual
    );

    setDisplay(String(result));
  };

  return (
    <div className="flex flex-col items-center my-10">
      {/* display */}
      <div
        className="flex justify-center overflow-x-auto
                items-center border border-gray-400 rounded 
                p-2 w-40 h-14 text-center text-xl"
      >
        {display}
      </div>

      {/* teclado numérico */}
      <div className="grid grid-cols-3 gap-2 w-40 h-40 mt-5">
        <button
          className="bg-blue-300 p-2 rounded"
          onClick={() => {
            setDisplay(display + "0");
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            setDisplay(display + "1");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          1
        </button>
        <button
          onClick={() => {
            setDisplay(display + "2");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          2
        </button>
        <button
          onClick={() => {
            setDisplay(display + "3");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          3
        </button>
        <button
          onClick={() => {
            setDisplay(display + "4");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          4
        </button>
        <button
          onClick={() => {
            setDisplay(display + "5");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          5
        </button>
        <button
          onClick={() => {
            setDisplay(display + "6");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          6
        </button>
        <button
          onClick={() => {
            setDisplay(display + "7");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          7
        </button>
        <button
          onClick={() => {
            setDisplay(display + "8");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          8
        </button>
        <button
          onClick={() => {
            setDisplay(display + "9");
          }}
          className="bg-blue-300 p-2 rounded"
        >
          9
        </button>

        <button
          onClick={() => {
            setDisplay("");
          }}
          className="bg-violet-300 p-2 rounded"
        >
          C
        </button>

        {/* Botão Soma */}
        <button
          onClick={() => {
            handleOperatorClick("+");
          }}
          className="bg-green-500 p-2 rounded"
        >
          +
        </button>

        {/* Botão Multiplicação */}
        <button
          onClick={() => {
           handleOperatorClick("*")
          }}
          className="bg-green-500 p-2 rounded"
        >
          *
        </button>

        <button
          onClick={() => {
            calculate();
          }}
          className="bg-amber-400 p-2 rounded"
        >
          =
        </button>

        <button
          onClick={() => {
           handleOperatorClick("-")
          }}
          className="bg-green-400 p-2 rounded"
        >
          -
        </button>

        <button
          onClick={() => {
            handleOperatorClick("/")
          }}
          className="bg-green-400 p-2 rounded"
        >
          /
        </button>

        <button
          onClick={() => {
            backspace();
          }}
          className="bg-violet-300 p-2 rounded col-span-2"
        >
          backspace
        </button>
      </div>
    </div>
  );
}