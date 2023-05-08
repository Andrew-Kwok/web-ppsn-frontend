import Link from 'next/link';
import Image from 'next/image'

const Navbar = ({}) => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10" data-theme="dark">
        <div className="flex-1">
            <Link href="/">
            <Image className="ml-5"
                src="/logo-ppsn.png"
                alt="Logo PPSN"
                width={48}
                height={48}
            />
            </Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><Link href="/berita"> Berita </Link></li>
                <li tabIndex={0}>
                    <Link href="/tentang-kami">
                        Tentang Kami
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </Link>
                    <ul className="p-2 bg-base-100">
                    <li><Link href="/tentang-kami#latar-belakang"> Latar Belakang </Link></li>
                    <li><Link href="href=/tentang-kami#tujuan"> Tujuan </Link></li>
                    <li><Link href="href=/tentang-kami#visi-misi"> Visi/Misi </Link></li>
                    <li><Link href="href=/tentang-kami#tim-kami"> Tim Kami </Link></li>
                    </ul>
                </li>
                <li><Link href="hubungi-kami/"> Hubungi Kami </Link></li>
            </ul>
        </div>
    </div>
    );
};

export default Navbar;
