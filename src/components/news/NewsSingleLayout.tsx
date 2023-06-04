// import Image from "next/image";

import { NewsProps } from '@components/components/news/NewsProps'

export default function Page(news: NewsProps) {
    return (
        <div>
            <h1> {news.headline} </h1>
            <ul>
                {news.authors.map((author) => (
                    <h2 key={author.full_name}> {author.full_name} </h2>
                ))}
            </ul>
                    
            <h1> {news.picture} </h1>

            <img src={news.picture}/>


            {/* Unable to use builtin next.js image, need to configure later. Check Console for Internal Server Error */}
            {/* <Image 
                fill
                src="http://localhost:8000/media/news-images/SAM_5130.JPG"
                alt={news.headline}
            /> */}

            <h2> {news.pub_date} </h2>
            <p> {news.content} </p>
        </div>
    )
}