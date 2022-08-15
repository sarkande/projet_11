import React from "react";
import background from "../../assets/images/bg2.png";
import Tag from "../../components/Tag";

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
            <Thumb />
            <Thumb />
            <Thumb />
            <Thumb />
            <Thumb />
            <Thumb />
         </div>
         <Tag valueTag="tag-name" />
      </main>
   );
}

export default Home;
