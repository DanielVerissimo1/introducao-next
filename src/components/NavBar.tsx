import Image from "next/image";

export default function NavBar() {

    return (
        <nav className="bg-amber-50 shadow-sm">
            <div className="px-4">
                <div className="flex justify-between h-16 items-center">

                    <div className="flex items-center">
                        <Image
                            src="/nextjs-icon.svg"
                            alt="logo nextjs"
                            width={40}
                            height={40}
                        />
                        <span className="ml-2">NextApp</span>
                    </div>

                    <div className="flex space-x-6">
                        <a href="" className="text-lg font-medium hover:text-indigo-600">
                            Inicio
                        </a>
                        <a href="" className="text-lg font-medium  hover:text-indigo-600">
                            Recursos
                        </a>
                        <a href="" className="text-lg font-medium  hover:text-indigo-600">
                            Contato
                        </a>

                    </div>

                </div>
            </div>
        </nav>

    )
}