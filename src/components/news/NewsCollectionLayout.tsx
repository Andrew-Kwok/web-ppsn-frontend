import Image from "next/image";
import { useState, useEffect } from "react"

interface NewsProps {
    headline: string;
    picture: string;
}

function NewsBox(props: NewsProps) {
    return (
        <div className="relative h-screen">
            {/* <h1> {props.picture} </h1> */}

            <Image 
                fill
                src='https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80'
                alt={props.headline}
                sizes=" 33vw"
            />
            {/* <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-black"></div> */}

        </div>
    )
}

export default function Page() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('http://localhost:8000/api/news/');
                const jsonData  = await response.json();
                setData(jsonData);

                console.error(response.status)
            } catch(error) {
                console.error('Error fetching data: ', error);
            }
        }

        fetchData();
    }, [])

    return (
        <div className="h-screen">
            <h1> Berita Terbaru </h1>

            {data && <ul>
                {data.map((item) => (
                    <NewsBox 
                        headline={item.headline}
                        picture={'http://localhost:8000' + item.picture}
                    />
                ))}
            </ul> }

            <div className="grid grid-cols-3">
                <div>
                    <h1> Test </h1>
                </div>
                <div>
                    <h1> Test </h1>
                </div>
                <div>
                    <h1> Test </h1>
                </div>
            </div>
        </div>
    )
}