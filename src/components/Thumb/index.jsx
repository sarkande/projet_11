import { Link } from "react-router-dom";

function Thumb(args) {
   const data = args.data;
   console.log(data);
   return (
      <div className="thumb">
         <Link to={`/logement/${data.id}`}>
            <figure className="thumb__figure">
               <img className="thumb__figure--img" src={data.cover} alt="" />
               <figcaption className="thumb__figure--caption">
                  {data.title}
               </figcaption>
            </figure>
         </Link>
      </div>
   );
}

export default Thumb;
