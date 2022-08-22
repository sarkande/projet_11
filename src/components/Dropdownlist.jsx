import { useState } from "react";

function Dropdownlist({ title, text }) {
   let [isOpen, setIsOpen] = useState(false);
   return (
      <div className="dropdownlist" onClick={() => setIsOpen(!isOpen)}>
         <div className="dropdownlist__title">
            <h2 className="dropdownlist__title--name">{title}</h2>
            <div className="dropdownlist__title--icon">
               {isOpen ? (
                  <i className="fa-solid fa-angle-up"></i>
               ) : (
                  <i className="fa-solid fa-angle-down"></i>
               )}
            </div>
         </div>
         {isOpen ? <div className="dropdownlist__text">{text}</div> : null}
      </div>
   );
}

export default Dropdownlist;
