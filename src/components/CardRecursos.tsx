import Image from "next/image";
interface CardRecursosProps{// quando uso interface é uma obrigaçao passar os valores na rederizaçao
    links : {
        titulo: string;
        icone: string;
        subtitulo: string
    }[]
}

export default function CardRecursos({links}:CardRecursosProps) {

    return (

        <div>
            <div className="flex items-center">
                        <Image
                           src="/next.svg"
                           alt="logo nextjs"
                          width={90}
                          height={90}/>
                   </div>


        </div>
        // <nav className="bg-blue-200 shadow-sm">
        //     <div className="px-4 mx-4">
        //         <div className="flex justify-between h-16 items-center">

        //             <div className="flex items-center">
        //                 <Image
        //                     src="/next.svg"
        //                     alt="logo nextjs"
        //                     width={90}
        //                     height={90}
        //                 />
        //       
        //             </div>

        //             <div className="flex space-x-6">
        //                 {
        //                     links.map((link,indice)=>(
        //                         <a 
        //                         key={indice} 
        //                         href={link.href} 
        //                         className="hover:text-blue-900 text-lg font-bold">
        //                             {link.label}</a>
        //                     ))
        //                 }

        //             </div>

        //         </div>
        //     </div>
        // </nav>

    )
}