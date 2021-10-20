import React from "react";
import "../css/checkmark.css";

function Checkmark (props) {  

  // Método para cambiar el state de done  
 
    return (
      <div>
        <input type="checkbox"  onClick={() => console.log("Hello Jellow")} className="checkmark"/>        
      </div>
    );
  }



export default Checkmark;
