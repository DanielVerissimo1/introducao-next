import Calculadora from "@/components/Calculadora"
export default function calculadora() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Calculadora</h1>
            <Calculadora/>
            
        </div>
    )
}   