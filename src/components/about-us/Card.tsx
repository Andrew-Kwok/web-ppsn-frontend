import Link from "next/link"

interface CardProps {
    title: string;
    description: string;
    id: string;
}

export default function Card(props: CardProps) {
    return (
        <div className="card w-96 bg-gray-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title"> {props.title} </h2>
                <p> {props.description} </p>
                <div className="card-actions justify-end">
                <Link href={`tentang-kami#${props.id}`}> 
                    <button className="btn btn-primary">Pelajari Lebih Lanjut</button>
                </Link>
                </div>
            </div>
        </div>
    )
}