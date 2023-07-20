import Image from "next/image";
import getConfig from "next/config";
import Link from "next/link";
import { useState, useEffect } from "react";

import { NewsProps } from '@components/components/news/NewsProps';
import { NewsBoxProps } from "@components/components/news/NewsBox";
import UnderConstruction from "../UnderConstruction";

function SinglePageNewsBox(news: NewsBoxProps) {
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

    if (windowSize.width > 1024) {
        return (
        <SideNewsBox   
            id={news.id}
            headline={news.headline}
            picture={news.picture}
        />)
    } else {
        return (
        <MainNewsBox   
            id={news.id}
            headline={news.headline}
            picture={news.picture}
        />)
    }

}
function MainNewsBox(news: NewsBoxProps) {
    return (
        <Link href={`/berita/${news.id}`}>
            <div className="relative rounded-xl aspect-[3/2] w-100% cursor-pointer overflow-hidden">
                <Image 
                    src={news.picture}
                    alt={news.headline}
                    width={0}
                    height={0}
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover"
                        }}
                    // fill
                />

                <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-black opacity-70 p-2">
                    <p className="text-white text-xl overflow-auto"> {news.headline} </p>
                    <p className="text-white text-base"> Baca selengkapnya &#62; </p>
                </div>
            </div>
        </Link>
    )
}
function SideNewsBox(news: NewsBoxProps) {
    return (
        <Link href={`/berita/${news.id}`}>
            <div className="relative rounded-xl aspect-[2/1] lg:aspect-[2/3] w-100% cursor-pointer overflow-hidden lg:max-w-xs">
                <Image 
                    src={news.picture}
                    alt={news.headline}
                    width={0}
                    height={0}
                    style={{
                        width: "auto",
                        height: "100%",
                        objectFit: "cover"
                        }}
                    // fill
                />

                <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-black opacity-70 p-2">
                    <p className="text-white text-xl overflow-auto"> {news.headline} </p>
                    <p className="text-white text-base"> Baca selengkapnya &#62; </p>
                </div>
            </div>
        </Link>
    )
}

export default function Page(news: NewsProps) {
    const { publicRuntimeConfig } = getConfig()
    const [latestNews, setLatestNews] = useState<NewsProps[] | null>(null)

    useEffect(() => {
        const fetchNews = async() => {
            try {
                const response = await fetch(`${publicRuntimeConfig.API_URL}/api/news/`);
                const data  = await response.json();

                setLatestNews(data.results);
            } catch(error) {
                console.error('Error fetching News: ', error);
            }
        }

        fetchNews();
    }, [publicRuntimeConfig.API_URL])

    function validNextNews(item: NewsBoxProps) {return ( news.id != item.id )}

    let validLatestNews = latestNews?.filter((item) => validNextNews(item)).slice(0, 4)

    // TODO: Yonge          
    return (
        <div className="container mx-auto my-10 px-5 bg-slate-100 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">

            <hr className="mx-3" />

            <div className="my-5 mt-15">
                <h1 className="text-justify text-4xl font-semibold"> {news.headline} </h1>
            </div>

            <div className="lg:ml-7 lg:flex">
                <div className="lg:mx-7.5 lg:basis-2/3 lg:mr-0">
                    <div>
                        <h2 className="italic">
                            Penulis: &nbsp;
                            {news.authors
                            .reduce(
                                (result, author) => `${result}, ${author.full_name}`, "")
                            .slice(2)}
                        </h2>
                            
                        {/* <h1> {news.picture} </h1> */}

                        <div>
                            <Image
                                src={news.picture}
                                alt={news.headline}
                                width={0}
                                height={0}
                                style={{
                                    width: "100%",
                                    }}
                            />
                        </div>

                        {/* Unable to use builtin next.js image, need to configure later. Check Console for Internal Server Error */}
                        {/* <Image 
                            fill
                            src="http://localhost:8000/media/news-images/SAM_5130.JPG"
                            alt={news.headline}
                        /> */}

                        <h2 className="text-right"> {new Date(Date.parse(news.created_at)).toString()} </h2>

                        <div className="text-justify">
                            <p dangerouslySetInnerHTML={{__html: news.content}} />
                        </div>
                    </div>

                    <div className="my-5">
                        <hr className="w-80% h-1 mx-2.5 bg-gray-200 rounded-xl" />
                    </div>

                    <div>
                        <div>
                            <h2>Baca Selanjutnya</h2>
                        </div>
                        <div>
                            {validLatestNews &&
                                <MainNewsBox
                                    id={validLatestNews[0].id}
                                    headline={validLatestNews[0].headline}
                                    picture={`${publicRuntimeConfig.API_URL}${validLatestNews[0].picture}`}
                                />}
                        </div>
                    </div>

                    <hr className="mt-10 mb-5" />

                    <div>
                        
                    </div>
                </div>

                <div className="lg:px-7 pt-7.5 lg:pl-5 flex-auto">
                    <div className="container">
                        <div className="p-0.5">
                            <div className="text-bold"> 
                                <h2>Baca Selanjutnya</h2>
                            </div>
                            
                            {validLatestNews && <ul className="flex-col">
                                {validLatestNews.slice(1)
                                .map((item: NewsProps) => 
                                    <li className="my-3">
                                        <SinglePageNewsBox
                                            id={item.id}
                                            headline={item.headline}
                                            picture={`${publicRuntimeConfig.API_URL}${item.picture}`}
                                        />
                                    </li>
                                )}
                            </ul>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}