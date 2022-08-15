import { Link } from "react-router-dom";

function Error() {
   return (
      <div className="error__container">
         <h1 className="error__container--title">404</h1>
         <p className="error__container--text">
            Oups! La page que vous demandez n'existe pas.
         </p>

         <Link to="/" className="error__container--link">
            Retourner sur la page d’accueil
         </Link>
      </div>
   );
}

export default Error;
