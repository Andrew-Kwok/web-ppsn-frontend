import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = ({}) => {
    return (
        <div className="footer p-10 bg-gray-300 text-black">
            <div>
                <Link href="/" style={{ maxHeight: '15vh', maxWidth: '100%', overflow: 'hidden' }}>             
                    <Image className="ml-5"
                        src="/logo-ppsn.png"
                        alt="Logo PPSN"
                        width={120}
                        height={120}
                        // TODO: Set max-height as 15vh
                    /> 
                </Link>
                <p> 2021-2023 Perhimpunan Pelajar Sains Nasional </p>
            </div> 
            <div className="text-xl">
                <span className="footer-title"> <Link className="link link-hover" href="/tentang-kami"> Tentang Kami </Link> </span>  
                <Link className="link link-hover" href="/tentang-kami#latar-belakang"> Latar Belakang </Link> 
                <Link className="link link-hover" href="/tentang-kami#tujuan"> Tujuan </Link> 
                <Link className="link link-hover" href="/tentang-kami#visi-misi"> Visi-Misi </Link> 
                <Link className="link link-hover" href="/tentang-kami#tim-kami"> Tim Kami </Link>
            </div> 
            <div className="text-xl">
                <span className="footer-title"> <Link className="link link-hover" href="/hubungi-kami"> Hubungi Kami </Link> </span> 
                <Link className="link link-hover" href="/hubungi-kami#kirim-pesan"> Kirimkan Pesan </Link> 
                <Link className="link link-hover" href="/hubungi-kami#alamat-kontak"> Alamat & Kontak </Link> 
            </div> 
            <div className="text-xl">
                <span className="footer-title"> Media Sosial </span> 
                <div className="grid grid-flow-col gap-4 text-6xl">
                    {/* TODO: Error when using complex method in https://dev.to/vuongddang/how-to-use-fontawesome-in-next-js-5bl5 */}
                    <Link className="mr-8 contact-list-icon hover:text-color-email" href="mailto:ppsnasional@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                    <Link className="mr-8 contact-list-icon hover:text-color-ig" href = "https://www.instagram.com/ppsn.id/"> 
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link className="mr-8 contact-list-icon hover:text-color-li" href="https://id.linkedin.com/company/perhimpunan-pelajar-sains-nasional"> 
                        <FontAwesomeIcon icon={faLinkedin} /> 
                    </Link>
                </div>
            </div>		
        </div>
    );
};

export default Footer;