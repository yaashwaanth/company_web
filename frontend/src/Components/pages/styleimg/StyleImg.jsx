import React from "react";
import "./StyleImg.css";
export default function StyleImg(props) {
  
  return (
    <div className="card">
      <img id="cardimg"  src={props.img} alt="Avatar" style={{ width: "100%" }} />
      <div className="container">
    <center>  <button id="cardbutton" style={props.position%2==0? 
      {backgroundColor: " #58AB48",color:"black"}:{backgroundColor: "#58AB48",color:"white"} }>
        <a className="buttonNameLink" href={`/product/${props.id}`}>{props.prod}</a>
        </button>
       </center>
      </div>
    </div>
  );
}
