import logements from "../../assets/logements.json";
import Error from "../Error";
import Tag from "../../components/Tag";
import { useLocation } from "react-router-dom";
import Dropdownlist from "../../components/Dropdownlist";

import star_full from "../../assets/images/star_full.png";
import star_empty from "../../assets/images/star_empty.png";

function Logement() {
   let currentPath = useLocation().pathname.split("/");
   let idLogement = currentPath[currentPath.length - 1];
   let logement = logements.filter((logement) => logement.id === idLogement);

   if (logement.length === 0) return <Error />;
   else logement = logement[0];

   console.log(logement);

   return (
      <main>
         <div className="home__banner">
            <img
               className="home__banner--img"
               src={logement.cover}
               alt="kasa_1"
            />
         </div>
         <div className="home__content">
            <div className="left">
               <h1>{logement.title}</h1>
               <h2>{logement.location}</h2>
               <div className="tags">
                  {logement.tags.map((tag) => (
                     <Tag key={tag} valueTag={tag} />
                  ))}
               </div>
            </div>
            <div className="right">
               <div className="contact-info">
                  <h3>{logement.host.name}</h3>
                  <img src={logement.host.picture} alt={logement.host.name} />
               </div>
               <div>
                  {Array.from({ length: logement.rating }, (_, i) => (
                     <img key={i} src={star_full} alt={logement.rating} />
                  ))}
                  {Array.from({ length: 5 - logement.rating }, (_, i) => (
                     <img key={i} src={star_empty} alt="" />
                  ))}
               </div>
            </div>
         </div>
         <div className="container">
            <Dropdownlist title="Description" text={logement.description} />

            <Dropdownlist
               title="Équipements"
               text={
                  <ul>
                     {logement.equipments.map((equipment) => (
                        <li key={equipment}>{equipment}</li>
                     ))}
                  </ul>
               }
            />
         </div>
      </main>
   );
}

export default Logement;
