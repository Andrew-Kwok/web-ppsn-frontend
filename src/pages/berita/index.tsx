import Link from "next/link"
import getConfig from "next/config";
import { useState, useEffect } from "react"

import { NewsProps } from '@components/components/news/NewsProps'
import NewsBox from '@components/components/news/NewsBox'


export default function Page() {
    const { publicRuntimeConfig } = getConfig()
    const [news, setNews] = useState<NewsProps[] | null>(null)
    const [prevPage, setPrevPage] = useState('');
    const [nextPage, setNextPage] = useState('');


    useEffect(() => {
        const fetchNews = async() => {  
            try {
                const response = await fetch(`${publicRuntimeConfig.API_URL}/api/news/`);
                const data  = await response.json();

                setNews(data.results);
                setPrevPage(data.previous);
                setNextPage(data.next);
            } catch(error) {
                console.error('Error fetching News: ', error);
            }
        }
        fetchNews();

    }, [publicRuntimeConfig.API_URL])

    const loadPrevPage = async() => {
        try {
            const response = await fetch(prevPage);
            const data  = await response.json();

            setNews(data.results);
            setPrevPage(data.previous);
            setNextPage(data.next);
        } catch(error) {
            console.error('Error fetching Previous Page News: ', error);
        }
    }

    const loadNextPage = async() => {
        try {
            const response = await fetch(nextPage);
            const data  = await response.json();

            setNews(data.results);
            setPrevPage(data.previous);
            setNextPage(data.next);
        } catch(error) {
            console.error('Error fetching Next Page News: ', error);
        }
    }


    return (
        <div className="min-h-fit">
            <div className="flex justify-center my-8">
                <div className="w-full min-h-screen max-w-7xl bg-white shadow-lg p-2">
                    <h1 className="text-2xl font-bold"> Kumpulan Berita PPSN </h1>
                    <div className="flex justify-center items-center"> 
                        {news && <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2">
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
                    
                    <div className="flex justify-between m-2">
                        <button className="btn btn-primary" onClick={loadPrevPage} disabled={!prevPage}> Prev </button>
                        <button className="btn btn-primary" onClick={loadNextPage} disabled={!nextPage}> Next </button>
                    </div>                    
                </div>
            </div>
        </div>
    )
}