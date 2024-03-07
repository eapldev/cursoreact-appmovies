import { Link } from "react-router-dom";
import style from "./Header.module.css"

function Header() {
    return (
        <header className={style.header}>
            <Link to="/">
                <span>CineFlix</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/watch">Assistir</Link>
            </nav>
        </header>
    );
}

export default Header