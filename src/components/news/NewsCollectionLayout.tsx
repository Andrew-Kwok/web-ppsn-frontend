import Link from "next/link"
import getConfig from "next/config";
import { useState, useEffect } from "react"

import { NewsProps } from '@components/components/news/NewsProps'
import NewsBox from '@components/components/news/NewsBox'

export default function Page() {
    const { publicRuntimeConfig } = getConfig()
    const [news, setNews] = useState<NewsProps[] | null>(null)

    useEffect(() => {
        const fetchNews = async() => {
            try {
                const response = await fetch(`${publicRuntimeConfig.API_URL}/api/news/`);
                const data  = await response.json();

                setNews(data.results);
            } catch(error) {
                console.error('Error fetching News: ', error);
            }
        }

        fetchNews();
    }, [publicRuntimeConfig.API_URL])

    return (
        <div className="min-h-fit">
            <div className="flex justify-center my-8">
                <div className="w-full max-w-7xl bg-white shadow-lg p-2">
                    <h1 className="text-2xl font-bold"> Berita Terbaru </h1>
                    <div className="flex justify-center items-center"> 
                        {news && <ul className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2">
                            {news.map((item: NewsProps) => (
                                <li key={item.id} className="w-full p-[2%]">
                                    <NewsBox
                                        id={item.id}
                                        headline={item.headline}
                                        picture={`${publicRuntimeConfig.API_URL}${item.picture}`}
                                    />
                                </li>
                            ))}
                        </ul> }
                    </div>
                    <Link href="/berita"> <p className="text-xl text-right text-orange-800"> Lihat Berita Lebih Lengkap &#62; </p> </Link>
                </div>
            </div>
        </div>  
    )
}