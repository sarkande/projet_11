import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/logo.png";

function Header() {
   return (
      <header>
         <div className="logo">
            <img src={logo} alt="logo" />
         </div>

         <nav>
            <Link
               to="/"
               className={useLocation().pathname === "/" ? "selected" : null}
            >
               ACCUEIL
            </Link>
            <Link
               to="/about"
               className={
                  useLocation().pathname === "/about" ? "selected" : null
               }
            >
               A PROPOS
            </Link>
         </nav>
      </header>
   );
}

export default Header;
