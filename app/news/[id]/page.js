import { DUMMY_NEWS } from "@/dumy-news";

export default function NewsSpec({ params }) {
    const newsId = params.id;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug == newsId)
    return (
        <article>
            <header >
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />

                <h1>{newsItem.title}</h1>
                <time datetime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>News ID:{params.id}</p>
        </article>
    )
}