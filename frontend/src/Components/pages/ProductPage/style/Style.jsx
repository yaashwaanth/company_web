import React from 'react'
import "./Style.css"
export default function Style( props) {
  const  web=()=>{
    // window.open(props.img,"_self")
    // console.log(props.URI);
  }

  return (
    <div className="card1">
      <img id="cardimg1" onClick={web} src={props.img} alt="Avatar" style={{ width: "100%" }} />
    </div>
  )
}
