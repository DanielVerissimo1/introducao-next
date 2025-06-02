import NavBar from "@/components/NavBar";


export default function Home() {
  return (
    <div>
      <NavBar links={
        [
          {label:"Inicio", href:"/"},
          {label:"Sobre", href:"/about"},
          {label:"Produtos", href:"/products"}
        ]
    }/>
      
    </div>
  );
}
