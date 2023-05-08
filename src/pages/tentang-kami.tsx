import Link from 'next/link';
import Image from 'next/image'

export default function Page() {
    return (
        <div>
            {/* Logo & PPSN */}
            <div className="hero min-h-screen bg-gray-200">
                <div className="hero-content max-w-[40rem] text-center">
                    <div>
                        <Image className="mx-auto w-[25rem]"
                            src="/logo-ppsn.png"
                            alt="Logo PPSN"
                            width={400}
                            height={400}
                        />                    
                        <div className="flex flex-col w-full lg:flex-row"> 
                            <div className="grid flex-grow h-32 card place-items-center text-3xl"> PPSN </div> 
                            <div className="divider lg:divider-horizontal"></div> 
                            <div className="grid flex-grow h-32 card place-items-center text-3xl"> Perhimpunan Pelajar Sains Nasional </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Latar Belakang */}
            <div id="latar-belakang" className="min-h-screen w-full flex justify-center items-center py-28">
                <div className="w-2/3 lg:w-1/2">
                    <h1 className="text-center text-5xl font-bold" data-aos="fade-up"> LATAR BELAKANG </h1>
                    <div className="chat chat-start">
                        <div className="chat-bubble" data-aos="zoom-in-right"> Dunia kini telah memasuki abad 21, sebuah abad yang relevan dengan Revolusi Industri 4.0 dan era "Disrupsi", dimana inovasi dan ide menjadi pondasi dan ide menjadi pondasi atau dasar perkembangan masyarakat itu sendiri. </div>
                        <div className="chat-bubble" data-aos="zoom-in-right"> Indonesia sebagai negara yang memiliki populasi terbesar ke-4 di dunia tentunya dihadapkan dengan problematika yang sama di era yang penuh akan "ketidakpastian" ini. </div>
                        <div className="chat-bubble" data-aos="zoom-in-right"> Kolaborasi menjadi jawaban dan kunci tersendiri dalam menghadapi era disrupsi yang semakin tidak pasti ini. Oleh karena itu, diperlukan sebuah wadah untuk bersama-sama membangun talenta Indonesia dalam sebuah rantai kolaborasi. </div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble" data-aos="zoom-in-left"> Dari sini, muncullah <strong> Aliansi Komunitas Talenta Indonesia (AKTI) </strong> yang beranggotakan 8 komunitas talenta yang sejalan dengan ajang talenta Puspresnas Kemendikbudristek RI. Salah satu bagian dari komunitas tersebut adalah PPSN atau Perhimpunan Pelajar Sains Nasional, sebuah komunitas yang menaungi ajang mba Olimpiade Sains Nasional (OSN). </div>
                        <div className="chat-bubble" data-aos="zoom-in-left"> Maka dalam rangka meningkatkan kolaborasi dalam dunia sains di Republik Indonesia, diperlukan talenta-talenta  hebat di seluruh penjuru negeri untuk berpartisipasi dalam mengembangkan organisasi ini melalui mekanisme rekrutmen kepengurusan yang terlaksana pada awal tahun 2022. </div>
                    </div>
                </div>
            </div>

            {/* Tujuan */}
            <div id="tujuan" className="hero min-h-screen bg-gray-200">
                <div className="hero-content flex-col lg:flex-row w-2/3">
                    <div className="flex flex-row lg:flex-col">
                        <Image 
                            className="max-w-[16rem] rounded-lg shadow-2xl m-12" 
                            src="/logo-ppsn.png" 
                            alt="Logo PPSN"
                            data-aos="zoom-in-right"
                            width={300}
                            height={300} 
                        />
                        <Image 
                            className="max-w-[16rem] rounded-lg shadow-2xl m-12" 
                            src="/logo-akti.png" 
                            alt="Logo AKTI"
                            data-aos="zoom-in-right" 
                            width={300}
                            height={300}
                        />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold" data-aos="zoom-in-right"> TUJUAN </h1>
                        <p className="bg-gray-300 p-8 rounded-box text-2xl text-justify mt-8" data-aos="zoom-in-right"> Perhimpunan Pelajar Sains Nasional adalah organisasi talenta sains Indonesia yang merupakan bagian dari Aliansi Komunitas Talenta Indonesia, di bawah naungan Pusat Prestasi Nasional - Kemendikbudristek RI, yang bertujuan untuk menghimpun, membentuk, dan menembangkan talenta sains muda Indonesia dalam berbagai lini untuk memajukan penetrasi ilmu pengetahuan dan meningkatkan minat sains generasi muda Indoensia dalam rangka mengembangkan aspek sosial, akamdemis serta nasionalisme dan persatuan kepada saintis muda Indonesia. </p>
                    </div>
                </div>
            </div>

            {/* Visi Misi */}
            <div id="visi-misi" className="hero min-h-screen">
                <div className="hero-content max-w-screen-lg text-center">
                    <div className="flex flex-col w-full lg:flex-row">
                        <div className="grid flex-grow card bg-gray-300 p-8 rounded-box place-items-center lg:w-1/2" data-aos="fade-up-left"> 
                            <h1 className="text-4xl font-bold"> VISI </h1>
                            <p> Menghimpun  , membentuk dan mengembangkan talenta sains muda Indonesia dalam berbagai lini untuk memajukan penetraasi Ilmu Pengetahuan dan meningkatkan minat sains generasi muda Republik Indonesia </p>
                        </div> 
                        <div className="divider lg:divider-horizontal"></div> 
                        <div className="grid flex-grow card bg-gray-300 p-8 rounded-box place-items-center lg:w-1/2" data-aos="fade-down-right">
                            <h1 className="text-4xl font-bold"> MISI </h1>
                            <ul className="list-decimal ml-4 text-left mt-5">
                                <li> <p> Membuat wadah dan menghimpun berbagai talenta sains Indonesia dalam sebuah komunitas yang saling mendukung dan harmonis. </p> </li>
                                <li> <p> Membina dan mengarahkan minat dan baat generasi muda dalam bidang sains. </p> </li>
                                <li> <p> Mengembangkan rasa nasionalisme generasi muda melalui sains untuk mewujudkan Generasi Indonesia Emas 2045. </p> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* TODO: Organizational Structure & Strategic Partner. Requires API */}

        </div>
    )
};