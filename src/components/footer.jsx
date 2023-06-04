import { Link } from "react-router-dom";

function Footer() {
    return  <footer className="page-footer
    red darken-1">
      <div className="footer-copyright ">
        <div className="container">
            © {new Date().getFullYear()}
              _Zakurenchik & Alina
              <Link className="grey-text text-lighten-4 right"
           to="/">Repository</Link>
          </div>
        </div>
  </footer>
}
export { Footer };