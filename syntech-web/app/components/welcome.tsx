import Gramatica from "./gramatica";
import Hero from "./hero";
import Link from "next/link";

export default function Welcome() {
  return (
    <main>
        <Hero/>
      <div className="flex justify-center p-28 bg-background-light text-logo-blue">
        <div className="w-7/12 flex flex-col items-center text-center" >
          <p className="text-5xl font-bold pb-7" >¿Qué es syntech?</p>
          <p className="text-xl">Syntech es un lenguaje de marcado diseñado para formatear texto de manera sencilla y legible, 
            pero con una gramática específica que lo distingue de otros lenguajes similares como Markdown. 
            Al igual que Markdown, Syntech se enfoca en la facilidad de uso y la legibilidad, permitiendo 
            a los usuarios formatear texto sin necesidad de conocimientos avanzados de programación.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-16 text-primary-light bg-section-home">
        <p className="text-5xl font-bold pb-20">¡Comienza ahora!</p>
        <div className="flex flex-row">
          <div className="flex flex-col items-start h-72 w-fit mr-24 py-8 pl-8 pr-40 text-xl rounded-lg bg-white text-gray-900">
            <p>&#35;1{"{ Comienza con un título }"}</p>
            <p>#</p>
            <p>“Continua escribiendo aqui”</p>
          </div>
          <div className="flex flex-col items-start h-72 w-fit py-8 pl-8 pr-40 rounded-lg bg-white text-gray-900">
            <p className="text-3xl pb-4">Comienza con un título</p>
            <p></p>
            <p className="text-xl">Continua escribiendo aqui</p>
          </div>
        </div>
        <Link href="/start"className="font-bold text-2xl pt-20 hover:text-logo-blue">Haz click para ir al editor</Link>
        
      </div>
      <div className="flex flex-col justify-center items-center p-28 bg-background-light text-logo-blue">
        <p className="text-5xl font-bold pb-9" >Gramática</p>
        <Gramatica/>
      </div>
      <div className="flex flex-col justify-center items-center p-16 text-primary-light bg-section-home">
        <p className="text-5xl font-bold pb-20">Equipo de Syntech</p>
        <div className="flex flex-row">
          <div className="flex flex-col justify-center items-center m-10">
            <img className="size-24 rounded-full mb-4" src={"/gina.jpeg" }/>
            <p>Regina Rodriguez</p>
          </div>
          <div className="flex flex-col justify-center items-center m-10">
            <img className="size-24 rounded-full mb-4" src={"/mike.png" }/>
            <p>Miguel Bermea</p>
          </div>
          <div className="flex flex-col justify-center items-center m-10">
            <img className="size-24 rounded-full mb-4" src={"/salma.jpeg" }/>
            <p>Salma Martinez</p>
          </div>
          <div className="flex flex-col justify-center items-center m-10">
            <img className="size-24 rounded-full mb-4" src={"/carol.jpeg" }/>
            <p>Carol Arrieta</p>
          </div>
        </div>
      </div>
    </main>
  );
}
