import React from 'react'
import "./Style.css"
export default function Style( props) {
  const  web=()=>{
    window.open(props.img,"_self")
    // console.log(props.URI);
  }

  return (
    <div className="card1">
       <video
  controls controlsList='nodownload nofullscreen noremoteplayback' 
  disablePictureInPicture 
  disableRemotePlayback
  src = {props.img}
  >
  </video>
    </div>
  )
}
