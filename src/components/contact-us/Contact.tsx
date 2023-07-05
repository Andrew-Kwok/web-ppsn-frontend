import Link from 'next/link'
import getConfig from "next/config";

import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

import Map from './Map';

export default function Contact() {
    const { publicRuntimeConfig } = getConfig()

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

    return (
        <div className="container flex justify-center items-center mx-auto h-[150vh] lg:h-screen">
            <div className="flex flex-col items-center w-full">

                <h1 className="text-6xl mt-[-15rem] lg:mt-0"> Hubungi Kami </h1>
                
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="w-full lg:w-1/2 mt-12">
                        <h2 className="text-4xl text-center mb-6"> Alamat </h2>
                        <div className="flex flex-col justify-center items-center">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2921223750805!2d106.80039185049723!3d-6.225160862679051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1845cccaec9%3A0xe5cac6cae89e27bc!2sPusat%20Prestasi%20Nasional%2C%20Kementerian%20Pendidikan%2C%20Kebudayaaan%2C%20Riset%2C%20dan%20Teknologi!5e0!3m2!1sen!2sca!4v1672536524755!5m2!1sen!2sca" className="w-2/3 h-[40vh] border-0"  loading="lazy"></iframe>
                            {/* <Map lat={-34.397} lng={150.644} /> */}
                            <div className="w-2/3"> 
                                <p> <strong> Kantor Pusat Prestasi Nasional </strong> </p>
                                <p> Jl. Jendral Sudirman, Senayan, Jakarta - 10270, Komplek Kementerian Pendidikan dan Kebudayaan, Gedung C, Lantai 19 , Jakarta Pusat, Jakarta 10270, ID </p>
                            </div>
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal opacity-0"></div> 
                    <div className="w-full lg:w-1/2 relative mt-12">
                        <h2 className="text-4xl text-center"> Kontak </h2>
                        <div className="flex justify-center">
                            <ul className="mt-6">
                                <li className="contact-list">
                                    <Link href={`tel:${publicRuntimeConfig.PPSN_PHONE}`} className="contact-list-icon hover:text-color-phone"> 
                                        <FontAwesomeIcon icon={faPhone} />
                                    </Link>
                                    <Link href={`tel:${publicRuntimeConfig.PPSN_PHONE}`} className="contact-list-text hover:text-color-phone after:bg-color-phone"> 
                                        +62 818-0713-7217 
                                    </Link>
                                </li>
                                <li className="contact-list">
                                    <Link href={`mailto:${publicRuntimeConfig.PPSN_EMAIL}`} className="contact-list-icon hover:text-color-email"> 
                                        <FontAwesomeIcon icon={faEnvelope} /> 
                                    </Link>
                                    <Link href={`mailto:${publicRuntimeConfig.PPSN_EMAIL}`} className="contact-list-text hover:text-color-email after:bg-color-email"> 
                                        ppsnasional@gmail.com 
                                    </Link>  
                                </li>
                                <li className="contact-list">
                                    <Link href={publicRuntimeConfig.PPSN_IG} className="contact-list-icon hover:text-color-ig"> 
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </Link>
                                    <Link href={publicRuntimeConfig.PPSN_IG} className="contact-list-text hover:text-color-ig after:bg-color-ig"> 
                                        @ppsn.id 
                                    </Link>   
                                </li>
                                <li className="contact-list">
                                    <Link href={publicRuntimeConfig.PPSN_LI} className="contact-list-icon hover:text-color-li"> 
                                        <FontAwesomeIcon icon={faLinkedin} /> 
                                    </Link>
                                    <Link href={publicRuntimeConfig.PPSN_LI} className="contact-list-text hover:text-color-li after:bg-color-li"> 
                                        {windowSize.width > 768 ? 'Perhimpunan Pelajar Sains Nasional' : 'PPSN'}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}