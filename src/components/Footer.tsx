import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import getConfig from "next/config";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = ({}) => {
    const { publicRuntimeConfig } = getConfig()

    return (
        <div className="footer p-10 bg-gray-300 text-black">
            <div>
            <Link href="/" className='relative h-32 aspect-square'>
                <Image 
                    src="/logo-ppsn.png"
                    alt="Logo PPSN"
                    fill
                />
            </Link>
            <p className='mt-4'> 2021-2023 Perhimpunan Pelajar Sains Nasional </p>
            </div> 
            <div className="text-xl">
                <span className="footer-title"> <Link className="link link-hover" href="/tentang-kami"> Tentang Kami </Link> </span>  
                <Link scroll={false} className="link link-hover" href="/tentang-kami#latar-belakang"> Latar Belakang </Link> 
                <Link scroll={false} className="link link-hover" href="/tentang-kami#tujuan"> Tujuan </Link> 
                <Link scroll={false} className="link link-hover" href="/tentang-kami#visi-misi"> Visi-Misi </Link> 
                <Link scroll={false} className="link link-hover" href="/tentang-kami#tim-kami"> Tim Kami </Link>
            </div> 
            <div className="text-xl">
                <span className="footer-title"> <Link className="link link-hover" href="/hubungi-kami"> Hubungi Kami </Link> </span> 
                <Link scroll={false} className="link link-hover" href="/hubungi-kami#kirim-pesan"> Kirimkan Pesan </Link> 
                <Link scroll={false} className="link link-hover" href="/hubungi-kami#alamat-kontak"> Alamat & Kontak </Link> 
            </div> 
            <div className="text-xl">
                <span className="footer-title"> Media Sosial </span> 
                <div className="grid grid-flow-col gap-4 text-6xl">
                    {/* TODO: Error when using complex method in https://dev.to/vuongddang/how-to-use-fontawesome-in-next-js-5bl5 */}
                    <Link className="mr-8 contact-list-icon hover:text-color-email" href={`mailto:${publicRuntimeConfig.PPSN_EMAIL}`}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                    <Link className="mr-8 contact-list-icon hover:text-color-ig" href = {publicRuntimeConfig.PPSN_IG}> 
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link className="mr-8 contact-list-icon hover:text-color-li" href={publicRuntimeConfig.PPSN_LI}> 
                        <FontAwesomeIcon icon={faLinkedin} /> 
                    </Link>
                </div>
            </div>		
        </div>
    );
};

export default Footer;