
type ButtonProps = {
    label: string; // ? a propriedade label nao é obrigatória
}

export default function Button({ label }: ButtonProps) {  // eu obrigo que o componente receba uma propriedade chamada label, que é  ButtonProps. any -> ta d
    return (
        <button  className="px-4 py-2 mx-1.5 bg-blue-400 text-white cursor-pointer rounded hover:bg-blue-500 transition-colors">
            {label}
        </button>
    );
    















    
}

