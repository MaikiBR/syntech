import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-row justify-between items-center sticky top-0 z-50 px-16 py-3 bg-logo-blue">
            <Link href="/"><img src={"/logo-claro.png" }  className="h-10 w-auto"/></Link>
            <div className="flex flex-row space-x-12 text-primary-light">
                <Link href="/"className="hover:text-secondary-blue">HOME</Link>
                <Link href="/start"className="hover:text-secondary-blue">START</Link>
            </div>
        </div>
    );
}