// a card of news with a 45% black box on top of the picture
import Link from "next/link"

interface NewsBoxProps {
    id: number;
    headline: string;
    picture: string;
}

export default function NewsBox(news: NewsBoxProps) {
    return (
        <Link href={`berita/${news.id}`}>
            <div className="relative aspect-square overflow-hidden cursor-pointer">
                <img src={news.picture} alt={news.headline} className="w-full h-full object-cover"/>
                <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-black opacity-70 p-2">
                    <p className="text-white text-xl"> {news.headline} </p>
                    <p className="text-white text-base"> Baca selengkapnya &#62; </p>
                </div>
            </div>
        </Link>
    )
}