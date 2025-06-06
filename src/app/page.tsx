import NavBar from "@/components/NavBar";
import CardRecursos from "@/components/CardRecursos";

export default function Home() {
  return (
    <div className="bg-white">

      <NavBar links={
        [
          {label:"Inicio", href:"/"},
          {label:"Sobre", href:"/about"},
          {label:"Produtos", href:"/products"}

        ]}/>

        <section className="bg-white py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12"> Recursos Principais </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
                <CardRecursos
                  titulo="Renderização Híbrida"
                  subtitulo="SSG, SSR e ISR para otimizar performance e SEO."
                  iconeSRC="🚀" />

                <CardRecursos
                  titulo="CSS Utility-First"
                  subtitulo="Tailwind CSS para estilização rápida e consistente."
                  iconeSRC="🎨" />

                <CardRecursos
                  titulo="TypeScript Integrado"
                  subtitulo="Tipagem estática para um código mais seguro."
                  iconeSRC="🔒" />
            </div>
      </section>
    </div>
  );
}