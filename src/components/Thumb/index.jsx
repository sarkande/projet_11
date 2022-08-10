import img from "../../assets/images/Rectangle_1.png";

function Thumb() {
   return (
      <div className="thumb">
         <figure className="thumb__figure">
            <img className="thumb__figure--img" src={img} alt="" />
            <figcaption className="thumb__figure--caption">
               Titre de la location
            </figcaption>
         </figure>
      </div>
   );
}

export default Thumb;
