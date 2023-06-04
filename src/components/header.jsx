import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="#4db6ac red lighten-1">
            <div className="container">
                <div className="nav-wrapper lime">
                    <Link to="/" className="brand-logo center"> 
                    SPA React Movies 
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="#!">Repository</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export { Header };
