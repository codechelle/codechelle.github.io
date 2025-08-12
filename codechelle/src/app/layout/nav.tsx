'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
    const currentpath = usePathname();
    console.log(currentpath);
    return (
        <nav className="flex justify-between w-screen p-6">
            <Link 
            className={currentpath === '/' ? 'font-bold' : 'font-normal'}
            href="/">Home</Link>
            {/*<Link 
            className={currentpath === '/changelog' ? 'font-bold' : 'font-normal'}
            href="/changelog">Build Codechelle</Link>*/}
        </nav>
    );
}