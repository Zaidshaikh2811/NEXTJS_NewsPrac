import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dumy-news";
import Link from "next/link";

export default function NewsSpec({ params }) {
    const newsId = params.id;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug == newsId)
    if (!newsItem) {
        notFound()
    }
    return (
        <article className="news-article">
            <header >
                <Link href={`/news/${newsItem.slug}/image`}>
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </Link>

                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>News ID:{params.id}</p>
        </article>
    )
}