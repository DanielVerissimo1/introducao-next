import Button from "@/components/Button"
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo"
export default function About(){
    
    return(
        <div>
            <h1 className="text-2x1 ">Sobre nós</h1>
            <p>Informações sobre a empresa </p>
            <Button label="clique-me"/>

            <div className="flex-col items-center justify-center ">
                <h1 className="text-center font-bold text-xl md:text-4xl text-gray-700 relative">Cards</h1>
                <div className="flex gap-5 items-center justify-center">
                    <ThreeDCardDemo
                    title="Clube da Luta"
                    description="Primeiro você tem que se entregar, primeiro você tem que saber não temer, saber que um dia você vai morrer. "
                    imageUrl="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/fa086dc9-2c08-4c47-9391-66c59aba3077/compose?aspectRatio=1.78&format=webp&width=1200"
                    />
                    <ThreeDCardDemo
                    title="Clube da Luta"
                    description="Primeiro você tem que se entregar, primeiro você tem que saber não temer, saber que um dia você vai morrer. "
                    imageUrl="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/fa086dc9-2c08-4c47-9391-66c59aba3077/compose?aspectRatio=1.78&format=webp&width=1200"
                    />
                    <ThreeDCardDemo
                    title="Clube da Luta"
                    description="Primeiro você tem que se entregar, primeiro você tem que saber não temer, saber que um dia você vai morrer. "
                    imageUrl="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/fa086dc9-2c08-4c47-9391-66c59aba3077/compose?aspectRatio=1.78&format=webp&width=1200"
                    />
                   
                </div>
            </div>
        </div>
    )
}