import React from "react";
import logo from "../../assets/images/bg2.png";

function Home() {
   return (
      <React.StrictMode>
         <div className="home__banner">
            <img className="home__banner--img" src={logo} alt="kasa_1" />
            <h1 className="home__banner--title">
               Chez vous, partout et ailleurs
            </h1>
         </div>
         <div>
            <figure className="home__figure">
               <img className="home__figure--img" src={logo} alt="kasa_1" />
               <figcaption className="home__figure--caption">
                  <h2 className="home__figure--title">
                     Chez vous, partout et ailleurs
                  </h2>
               </figcaption>
            </figure>
         </div>
      </React.StrictMode>
   );
}

export default Home;
