// import Image from "next/image";
// Image doesn't work, will use <img /> as the solution (which is slower)
import Link from "next/link"
import { useState, useEffect } from "react"

import { NewsProps } from '@components/components/news/NewsProps'
import NewsBox from '@components/components/news/NewsBox'

export default function Page() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('http://localhost:8000/api/news/');
                const jsonData  = await response.json();
                setData(jsonData);
            } catch(error) {
                console.error('Error fetching data: ', error);
            }
        }

        fetchData();
    }, [])

    return (
        <div className="h-min flex justify-center m-8">
            <div className="w-11/12 max-w-7xl bg-white shadow-lg p-4">
                <h1 className="text-2xl font-bold"> Berita Terbaru </h1>
                <div className="flex justify-center items-center"> 
                    {data && <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4">
                        {data.map((item) => (
                            <li className="w-full p-[3%]">
                                <NewsBox
                                    id={item.id}
                                    headline={item.headline}
                                    picture={`http://localhost:8000${item.picture}`}
                                />
                            </li>
                        ))}
                    </ul> }
                </div>
                <Link href="/berita"> <p className="text-xl text-right text-orange-800"> Lihat Berita Lebih Lengkap &#62; </p> </Link>
            </div>
        </div>
    )
}