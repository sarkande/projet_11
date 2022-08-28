import logements from "../../assets/logements.json";
import Error from "../Error";
import Tag from "../../components/Tag";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Dropdownlist from "../../components/Dropdownlist";

import star_full from "../../assets/images/star_full.png";
import star_empty from "../../assets/images/star_empty.png";

function Logement() {
   let currentPath = useLocation().pathname.split("/");
   let idLogement = currentPath[currentPath.length - 1];
   let logement = logements.filter((logement) => logement.id === idLogement);
   const [idPicture, setIdPicture] = useState(0);

   if (logement.length === 0) return <Error />;
   else logement = logement[0];
   let pictures = logement.pictures;
   return (
      <main>
         <div className="carroussel">
            <img
               className="home__banner--img"
               src={pictures[idPicture]}
               alt="kasa_1"
            />
            <div className="control">
               <i
                  className="fa-solid fa-angle-left"
                  onClick={() => {
                     if (idPicture > 0) setIdPicture(idPicture - 1);
                     else setIdPicture(pictures.length - 1);
                  }}
               ></i>

               <i
                  className="fa-solid fa-angle-right"
                  onClick={() => {
                     if (idPicture < pictures.length - 1)
                        setIdPicture(idPicture + 1);
                     else setIdPicture(0);
                  }}
               ></i>
            </div>
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
                     <img
                        key={`rating-${i}`}
                        src={star_full}
                        alt={logement.rating}
                     />
                  ))}
                  {Array.from({ length: 5 - logement.rating }, (_, i) => (
                     <img key={`rating-${i}`} src={star_empty} alt="" />
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
