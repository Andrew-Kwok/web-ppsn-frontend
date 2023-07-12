import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head';

import { useState, useEffect } from 'react';

export default function Navbar() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <div>
        <Head>
            <title>PPSN - Perhimpunan Pelajar Sains Nasional</title>
            <link rel="icon" href="/logo-ppsn.png" type="image/png" />
        </Head>
        {windowSize.width > 768 ? <DesktopNavbar /> : <MobileNavbar /> }
    </div>
};
     
function DesktopNavbar() {
    return (
    <div className="navbar bg-base-100 sticky top-0 z-10 flex justify-between h-16" data-theme="dark">
        <Link href="/" className='relative h-full ml-5 aspect-square'>
            <Image 
                src="/logo-ppsn.png"
                alt="Logo PPSN"
                fill
            />
        </Link>
        <div>
            <ul className="menu menu-horizontal px-1">
                <li> <Link href="hiring" className='bg-primary text-white hover:bg-transparent hover:outline-primary hover:font-bold hover:text-white transition-all focus:bg-primary-focus'> We&#39;re Hiring </Link></li>
                <li><Link href="/berita"> Berita </Link></li>
                <li>
                    <details>
                        <summary>
                            <Link href="/tentang-kami">
                                Tentang Kami
                            </Link>
                        </summary>
                        <ul className="p-2 bg-base-100">
                            <li><Link scroll={false} href="/tentang-kami#latar-belakang"> Latar Belakang </Link></li>
                            <li><Link scroll={false} href="tentang-kami#tujuan"> Tujuan </Link></li>
                            <li><Link scroll={false} href="tentang-kami#visi-misi"> Visi/Misi </Link></li>
                            <li><Link scroll={false} href="tentang-kami#tim-kami"> Tim Kami </Link></li>
                        </ul>
                    </details>
                </li>
                <li><Link href="hubungi-kami/"> Hubungi Kami </Link></li>
            </ul>
        </div>
    </div>
    )
}

function MobileNavbar() {
    return (
        <div className="navbar bg-base-100 sticky top-0 z-10 flex justify-between h-16" data-theme="dark">
        <Link href="/" className='relative h-full ml-5 aspect-square'>
            <Image 
                src="/logo-ppsn.png"
                alt="Logo PPSN"
                fill
            />
        </Link>
        <div>
            <ul className="menu menu-horizontal px-1">
                <li> <Link href="hiring" className='bg-primary text-white hover:bg-transparent hover:outline-primary hover:font-bold hover:text-white transition-all focus:bg-primary-focus'> We&#39;re Hiring </Link></li>
                <li>
                    <details>
                        <summary>
                            Menu
                        </summary>
                        <ul className="p-2 bg-base-100 right-0">
                            <li><Link href="/berita"> Berita </Link></li>
                            <li><Link href="tentang-kami/"> Tentang Kami </Link></li>
                            <li><Link href="hubungi-kami/"> Hubungi Kami </Link></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    </div>
    )
}