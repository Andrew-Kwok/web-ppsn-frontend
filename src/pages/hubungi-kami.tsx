import Link from 'next/link'

import UnderConstruction from "@components/components/UnderConstruction";

import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import QuestionForm from '@components/components/QuestionForm';


export default function Page() {
    return (
        <div>
            <div className="h-[50vh] bg-gray-200 flex flex-col items-center justify-center text-center">
                <h1 className="text-5xl lg:text-6xl"> Bagaimana kami dapat membantu? </h1>
                <h2 className="text-4xl lg:text-5xl mt-4"> Kirimkan kami <Link href="#kirim-pesan" className="link text-black font-bold">pesan</Link> anda! </h2>
            </div>

            <div id="#kirim-pesan" className="h-fit bg-gray-200 flex flex-col items-center p-8">
                <QuestionForm />
            </div>

            <div id="alamat-kontak" className="container flex justify-center items-center mx-auto h-[200vh] lg:h-screen">
                <div className="flex flex-col items-center w-full">
                    <h1 className="text-6xl" data-aos="fade-up"> Hubungi Kami </h1>
                    <div className="flex flex-col w-full lg:flex-row">
                        <div className="w-full lg:w-1/2 mt-12" data-aos="zoom-out-left">
                            <h2 className="text-4xl text-center mb-6"> Alamat </h2>
                            <div className="flex flex-col justify-center items-center">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2921223750805!2d106.80039185049723!3d-6.225160862679051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1845cccaec9%3A0xe5cac6cae89e27bc!2sPusat%20Prestasi%20Nasional%2C%20Kementerian%20Pendidikan%2C%20Kebudayaaan%2C%20Riset%2C%20dan%20Teknologi!5e0!3m2!1sen!2sca!4v1672536524755!5m2!1sen!2sca" className="w-2/3 h-[40vh] border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <div className="w-2/3"> 
                                    <p> <strong> Kantor Pusat Prestasi Nasional </strong> </p>
                                    <p> Jl. Jendral Sudirman, Senayan, Jakarta - 10270, Komplek Kementerian Pendidikan dan Kebudayaan, Gedung C, Lantai 19 , Jakarta Pusat, Jakarta 10270, ID </p>
                                </div>
                            </div>
                        </div>
                        <div className="divider lg:divider-horizontal opacity-0"></div> 
                        <div className="w-full lg:w-1/2 relative mt-12" data-aos="zoom-out-right">
                            <h2 className="text-4xl text-center"> Kontak </h2>
                            <div className="absolute left-20">
                                <ul className="mt-6">
                                    <li className="contact-list">
                                        <Link href="tel:+62-818-0713-7217" className="contact-list-icon hover:text-color-phone"> 
                                            <FontAwesomeIcon icon={faPhone} />
                                        </Link>
                                        <Link href="tel:+62-818-0713-7217" className="contact-list-text hover:text-color-phone after:bg-color-phone"> 
                                            +62 818-0713-7217 
                                        </Link>
                                    </li>
                                    <li className="contact-list">
                                        <Link href="mailto:ppsnasional@gmail.com" className="contact-list-icon hover:text-color-email"> 
                                            <FontAwesomeIcon icon={faEnvelope} /> 
                                        </Link>
                                        <Link href="mailto:ppsnasional@gmail.com" className="contact-list-text hover:text-color-email after:bg-color-email"> 
                                            ppsnasional@gmail.com 
                                        </Link>  
                                    </li>
                                    <li className="contact-list">
                                        <Link href="https://www.instagram.com/ppsn.id/" className="contact-list-icon hover:text-color-ig"> 
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </Link>
                                        <Link href="https://www.instagram.com/ppsn.id/" className="contact-list-text hover:text-color-ig after:bg-color-ig"> 
                                            @ppsn.id 
                                        </Link>   
                                    </li>
                                    <li className="contact-list">
                                        <Link href="https://id.linkedin.com/company/perhimpunan-pelajar-sains-nasional" className="contact-list-icon hover:text-color-li"> 
                                            <FontAwesomeIcon icon={faLinkedin} /> 
                                        </Link>
                                        <Link href="https://id.linkedin.com/company/perhimpunan-pelajar-sains-nasional" className="contact-list-text hover:text-color-li after:bg-color-li"> 
                                            Perhimpunan Pelajar Sains Nasional
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Contact Us Page. */}
        </div>
    )
}