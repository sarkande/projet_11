import React from "react";
import logements from "../../assets/logements.json";

import background from "../../assets/images/bg2.png";
import Thumb from "../../components/Thumb";

function Home() {
   return (
      <main>
         <div className="home__banner">
            <img className="home__banner--img" src={background} alt="kasa_1" />
            <h1 className="home__banner--title">
               Chez vous, partout et ailleurs
            </h1>
         </div>
         <div className="home__container">
            {logements.map((logement, index) => (
               <Thumb key={index} data={logement} />
            ))}
         </div>
      </main>
   );
}

export default Home;
