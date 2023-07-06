import Link from 'next/link'

import Card from '@components/components/about-us/Card'

import React, { useRef } from 'react';

export default function Carousel() {
    const contentRef = useRef(null);

    // const handleButtonClick = () => {
    //     if (contentRef.current) {
    //         contentRef.current.style.transform = `translateX(${contentRef.current.offsetLeft + 100}px)`;
    //     }
    // };
    
    return (
        <div id="kenali-kami" className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
            <h1 className="text-6xl font-bold mb-20"> KENALI KAMI </h1>
            <div className="carousel w-full px-24 relative">
                <div id="slide1" className="carousel-item relative mx-20">
                <Card 
                    title="Latar Belakang" 
                    description='Dunia kini telah memasuki abad 21, sebuah abad yang relevan dengan Revolusi Industri 4.0 dan era "Disrupsi" ...'
                    id="latar-belakang"
                />
                </div>
                
                <div id="slide2" className="carousel-item relative mx-20">
                <Card 
                    title="Tujuan" 
                    description='Perhimpunan Pelajar Sains Nasional adalah organisasi talenta sains Indonesia yang merupakan bagian dari ...'
                    id="tujuan"
                />
                </div>

                <div id="slide3" className="carousel-item relative mx-20">
                <Card 
                    title="Visi-Misi" 
                    description='Visi dan Misi Perhimpunan relative Pelajar Sains Nasional'
                    id="visi-misi"
                />
                </div>

                <div id="slide4" className="carousel-item relative mx-20">
                <Card 
                    title="Tim Kami" 
                    description='Struktur Organisasi Tim PPSN'
                    id="tim-kami"
                />
                </div>
            {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[60%]">
                <button onClick={handleButtonClick} className="btn btn-circle">❮</button> 
                <button onClick={handleButtonClick} className="btn btn-circle">❯</button>
            </div> */}
            </div>
       </div>
    )
}