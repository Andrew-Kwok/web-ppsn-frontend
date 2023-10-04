import Image from 'next/image'
import { Inter } from 'next/font/google'

import NewsCollectionLayout from '@components/components/news/NewsCollectionLayout'
import CarouselAboutUs from '@components/components/about-us/CarouselAboutUs'
import Contact from '@components/components/contact-us/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div> 
      <div className="hero min-h-screen bg-gray-200">
        <div className="hero-content max-w-[75rem] flex-col lg:flex-row">
          <figure className='max-w-sm w-full aspect-square rounded-lg shadow-2xl relative'>
            <Image
              src="/logo-ppsn.png" 
              alt="logo-ppsn"
              fill
              priority={true}
              sizes="(min-width: 60em) 24vw, (min-width: 28em) 45vw"
            />
          </figure>
          <div>
            <h1 className="text-4xl font-bold"> Perhimpunan Pelajar Sains Nasional (PPSN) </h1>
            <p className="py-6 text-xl text-justify"> Organisasi yang menjadi wadah kepada seluruh talenta sains Indonesia yang bertujuan untuk mengembangkan aspek sosial, akademik serta nasionalisme dan persatuan kepada saintis muda di Republik Indonesia </p>
            <a href="#kenali-kami"> <button className="btn btn-primary"> Kenali Kami </button> </a>
          </div>
        </div>
      </div> 

      <NewsCollectionLayout />      
      <CarouselAboutUs />
      <Contact />
    </div>
  )
}
