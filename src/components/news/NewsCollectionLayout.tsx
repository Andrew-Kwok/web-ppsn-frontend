// import Image from "next/image";
// Image doesn't work, will use <img /> as the solution (which is slower)
import Link from "next/link"
import getConfig from "next/config";
import { useState, useEffect } from "react"

import { NewsPagination, NewsProps } from '@components/components/news/NewsProps'
import NewsBox from '@components/components/news/NewsBox'

export default function Page() {
    const { publicRuntimeConfig } = getConfig()
    const [data, setData] = useState<NewsPagination | null>(null)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(`${publicRuntimeConfig.API_URL}/api/news/`);
                const jsonData  = await response.json();
                setData(jsonData);
            } catch(error) {
                console.error('Error fetching data: ', error);
            }
        }

        fetchData();
    }, [])

    return (
        <div className="min-h-screen">
            <div className="h-min flex justify-center m-8">
                <div className="w-11/12 max-w-7xl bg-white shadow-lg p-4">
                    <h1 className="text-2xl font-bold"> Berita Terbaru </h1>
                    <div className="flex justify-center items-center"> 
                        {data && <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4">
                            {data.results.map((item: NewsProps) => (
                                <li key={item.id} className="w-full p-[3%]">
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