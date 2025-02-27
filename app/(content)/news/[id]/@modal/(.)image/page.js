
import ModalBackdrop from "@/components/modal-backdrop";

import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {


    const newsItemSlug = params.id;
    const newsItem = await getNewsItem(newsItemSlug)
    if (!newsItem) {
        notFound();
    }
    return (
        <>
            <ModalBackdrop />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </div>
            </dialog>


        </>
    )
}