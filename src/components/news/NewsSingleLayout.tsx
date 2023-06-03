export default function Page({ news }) {
    return <div>
        <h1> {news.headline} </h1>
        <ul>
            {news.authors.map((author) => (
                <h2 key={author.full_name}> {author.full_name} </h2>
            ))}
        </ul>
        <h2> {news.pub_date} </h2>
        <p> {news.content} </p>
    </div>
}