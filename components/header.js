import Link from "next/link";
import NavLink from "./nav-links";


export default function MainHeader() {

    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">NextNews</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink href={"/news"}>News</NavLink>
                        {/* <Link className={path.startsWith("/news") ? 'active' : undefined} href="/news">News</Link> */}
                    </li>
                    <li>
                        <NavLink href={"/archive"}>Archive</NavLink>
                        {/* <Link className={path.startsWith("/archive") ? 'active' : undefined} href="/archive">Archive</Link> */}
                    </li>
                </ul>
            </nav>
        </header>
    );
}