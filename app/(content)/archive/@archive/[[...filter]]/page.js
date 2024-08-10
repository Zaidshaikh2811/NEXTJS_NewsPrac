import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";

export default async function FilteredNewsPage({ params }) {

    const filter = params.filter
    const selectedYear = filter?.[0]
    const selectedMonth = filter?.[1]
    let news;
    let links = await getAvailableNewsYears()
    if (selectedYear && !selectedMonth) {
        news = await getNewsForYear(selectedYear)
        links = getAvailableNewsMonths(selectedYear)
    }
    if (selectedYear && selectedMonth) {
        news = await getNewsForYearAndMonth(selectedYear, selectedMonth)
        links = []
    }

    let NewsContent = <p>No News Found For The Selected Period</p>
    if (news && news.length > 0) {
        NewsContent = <NewsList news={news}></NewsList>
    }
    const availableYears = await getAvailableNewsYears()
    console.log(selectedMonth);
    console.log(getAvailableNewsMonths().includes(selectedMonth));

    if ((selectedYear && !availableYears.includes(selectedYear))
        || (selectedMonth && getAvailableNewsMonths().includes(selectedMonth))) {
        throw new Error("Invalid Filter")
    }


    return <header id="archive-header">
        <nav>
            <ul>
                {links.map((link) => {
                    const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`
                    return (

                        <li key={link}><Link href={href}>{link}</Link> </li>
                    )
                })}

            </ul>
        </nav>
        {NewsContent}
    </header>
}