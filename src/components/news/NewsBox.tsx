// a card of news with a 45% black box on top of the picture
import Image from "next/image"
import Link from "next/link"

export interface NewsBoxProps {
    id: number;
    headline: string;
    picture: string;
}

export default function NewsBox(news: NewsBoxProps) {
    return (
        <Link href={`berita/${news.id}`}>
            <div className="relative aspect-square overflow-hidden cursor-pointer">
                <Image 
                    src={news.picture}
                    alt={news.headline}
                    fill
                />

                <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-black opacity-70 p-2">
                    <p className="text-white text-xl overflow-auto"> {news.headline} </p>
                    <p className="text-white text-base"> Baca selengkapnya &#62; </p>
                </div>
            </div>
        </Link>
    )
}