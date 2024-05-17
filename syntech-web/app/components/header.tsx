export default function Header() {
    return (
        <div className="flex flex-row justify-between items-center sticky top-0 z-50 px-16 py-3 bg-logo-blue">
            <img src={"/logo-claro.png" }  className="h-10 w-auto"/>
            <div className="flex flex-row space-x-12 text-primary-light">
                <p className="hover:text-secondary-blue">HOME</p>
                <p className="hover:text-secondary-blue">START</p>
            </div>
        </div>
    );
}