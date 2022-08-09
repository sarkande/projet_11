import { Link } from "react-router-dom";

import kasa_1 from "../../assets/images/kasa_1.png";
import kasa_2 from "../../assets/images/kasa_2.png";
import kasa_3 from "../../assets/images/kasa_3.png";
import kasa_4 from "../../assets/images/kasa_4.png";

function Header() {
   return (
      <header>
         <div className="logo">
            <img src={kasa_1} alt="kasa_1" />
            <img src={kasa_2} alt="kasa_2" />
            <img src={kasa_3} alt="kasa_3" />
            <img src={kasa_4} alt="kasa_4" />
         </div>

         <nav>
            <Link to="/" className="selected">
               ACCUEIL
            </Link>
            <Link to="/about">A PROPOS</Link>
         </nav>
      </header>
   );
}

export default Header;
