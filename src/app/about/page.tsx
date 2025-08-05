import Button from "@/components/Button"
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo"
export default function About(){
    const dadosFicticios = [
          {
                Key: "1",
                title: "Clube da Luta",
                category: "Filme",
                description: "Primeiro você tem que se entregar, primeiro você tem que saber não temer, saber que um dia você vai morrer.",
                imageUrl: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/fa086dc9-2c08-4c47-9391-66c59aba3077/compose?aspectRatio=1.78&format=webp&width=1200",
            },
        {
                Key: "2",
                title: "Pega a visao",
                category: "Livro",
                description: "Pega a visão é muito mais que um título impactante; é um chamado à ação, uma súplica por mudança, um chute na complacência que muitos de nós vivemos diariamente. ",
                imageUrl: "https://v2024.dm.com.br/wp-content/uploads/2025/01/rick-chester-1_noexif-1.jpg",
            },
            {
                Key: "3",
                title: "Taxi driver",
                category: "Filme",
                description: "Taxi Driver é um inferno, desde a cena inicial de um táxi emergindo de nuvens de vapor estigianas até a cena climática de assassinato em que a câmera finalmente olha para baixo.",
                imageUrl: "https://www.themoviedb.org/t/p/original/gJa3S50e1pdkyVI9HdIP3LdCUH0.jpg",
            },
            {
                Key: "4",
                title: "O Homem Mais Rico da Babilônia",
                category: "Livro",
                description: "O livro utiliza parábolas ambientadas na antiga Babilônia para transmitir princípios financeiros atemporais. As histórias, centradas no sábio Arkad — o homem mais rico da Babilônia ",
                imageUrl: "https://verdadeinvisivel.com.br/wp-content/uploads/2023/11/O-Homem-mais-Rico-da-Babilonia.png",
            },
             {
                Key: "5",
                title: "Peaky Blinders",
                category: "Serie",
                description: "Cillian Murphy é Thomas Shelby, líder do gangue local mais temido e poderoso, o Peaky Blinders. Fazem dinheiro com as apostas ilegais, proteção e no mercado negro.",
                imageUrl: "https://cinepop.com.br/wp-content/uploads/2022/01/peaky-blinders.jpeg",
            },
            {
                Key: "6",
                title: "Breaking Bad",
                category: "Serie",
                description: "Breaking Bad retrata a vida do químico Walter White, um homem brilhante frustrado em dar aulas para adolescentes do ensino médio",
                imageUrl: "https://a2.tvspielfilm.de/imedia/3012/9403012,HotdoFAWuchymwVDXj9N8GA2hcJeE9vJge9CrjUZuYVWgPaeSO+RCwbH9q98pM2guieinmh9pTlfCbHSznlupQ==.jpg",
            }
             
        ]

    return(
        <div className="bg-gray-100">
            <h1 className="text-2x1 ">Sobre nós</h1>
            <p>Informações sobre a empresa </p>
            <Button label="clique-me"/>

            <div className="flex-col items-center justify-center ">
                <h1 className="text-center font-bold text-xl md:text-4xl text-gray-700 py-8 relative">Cards</h1>
                <div className="flex gap-5 items-center justify-center">
                    <ThreeDCardDemo
                    title="Clube da Luta"
                    category="Filme"
                    description="Primeiro você tem que se entregar, primeiro você tem que saber não temer, saber que um dia você vai morrer. "
                    imageUrl="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/fa086dc9-2c08-4c47-9391-66c59aba3077/compose?aspectRatio=1.78&format=webp&width=1200"
                    />
                    <ThreeDCardDemo
                    title="Clube da Luta"
                    category="Filme"
                    description="Primeiro você tem que se entregar, primeiro você tem que saber não temer, saber que um dia você vai morrer. "
                    imageUrl="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/fa086dc9-2c08-4c47-9391-66c59aba3077/compose?aspectRatio=1.78&format=webp&width=1200"
                    />
                    <ThreeDCardDemo
                    title="Clube da Luta"
                    category="Filme"
                    description="Primeiro você tem que se entregar, primeiro você tem que saber não temer, saber que um dia você vai morrer. "
                    imageUrl="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/fa086dc9-2c08-4c47-9391-66c59aba3077/compose?aspectRatio=1.78&format=webp&width=1200"
                    />
                   
                </div>
            <div>
                <h1 className="text-center  font-bold text-xl md:text-4xl py-4 text-gray-700 relative">Cards Renderizados Com Map</h1>
                <div className="flex gap-5 items-center justify-center ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">
                    {dadosFicticios.map((item, index) => (
                        <ThreeDCardDemo
                            key={item.Key}
                            title={item.title}
                            description={item.description}
                            category={item.category}
                            imageUrl={item.imageUrl}
                        />
                    ))}
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}