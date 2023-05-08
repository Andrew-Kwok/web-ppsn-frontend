import Link from 'next/link';
import Image from 'next/image'

interface NavbarProps {
  title: string;
}

const Navbar = ({ title }: NavbarProps) => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10" data-theme="dark">
        <div className="flex-1">
            <a href="/">
            <Image className="ml-5"
                src="/logo-ppsn.png"
                alt="Logo PPSN"
                width={48}
                height={48}
            />
            </a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><a> Publikasi </a></li>
                <li tabIndex={0}>
                    <a>
                    Tentang Kami
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul className="p-2 bg-base-100">
                    <li><a> Latar Belakang </a></li>
                    <li><a> Tujuan </a></li>
                    <li><a> Visi-Misi </a></li>
                    <li><a> Tim Kami </a></li>
                    </ul>
                </li>
                <li><a href="hubungi-kami/"> Hubungi Kami </a></li>
            </ul>
        </div>
    </div>
    );
};

export default Navbar;
