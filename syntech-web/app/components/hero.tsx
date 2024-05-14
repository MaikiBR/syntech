import Image from "next/image";

export default function Hero() {
    return (
    <div className="bg-hero-background">
        <div className="flex flex-row justify-center p-24 items-center ">
            <div className="flex flex-col items-start h-96 w-fit mr-24 py-8 pl-8 pr-40 text-2xl rounded-lg bg-white text-gray-900">
                <p>&#35;1{"{ Estiliza tu texto rápidamente }"}</p>
                <p>#</p>
                <p>**Crea textos increíbles**</p>
                <p>#</p>
                <p>“Escribe con syntech”</p>
            </div>
            <div className="w-fit">
                <img src={"/logo-oscuro.png" } />
                <p className="pt-6 text-2xl text-logo-blue" >El diseño para tu texto como nunca antes</p>
            </div>
        </div>

        

        {/*
        <div className="w-screen">
            
            
             <img className="absolute z-0" alt="hero" src={"/hero-background.png" } />
            <div className="z-1">hola</div> 


          <Image
                src="/hero-background.png" 
                alt={"hero"}        
                fill={true}
                objectFit="cover"
                objectPosition="center"
            />  
    </div> */}
    </div>
        
    );
}