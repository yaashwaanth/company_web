import React ,{ useState } from 'react'
import  "./Navebar.css"
import logo from "./logo.png"
import {useSelector} from "react-redux"


export default function Navebar() {


    const [count, setCount] = useState(false);
    const mobbuton=()=>{
setCount(!count)
    }
  return (
    <div className='divnav'>
    
      <nav className='navbar'>
      <img src={logo} className="navelogo" alt=""  />
      <div>
        <ul id='navbar' className={count? "#navbar active":"#navbar"} >
        <li><a href='#imgbar' >Home</a></li>
        <li><a href='#AboutBox' >About</a></li>
        <li><a href='#Carouselimagshow' >Products</a></li>
        <li><a href='#enquiry' >Contact Us</a></li>
       
        <li><a href='index.html' >EN</a>
        </li>
        <h4 id='langbar'>|</h4>
      <li>  <a href='index.html' >HI</a></li>
        </ul>
      </div>
      <div id='mobile'>
<i className={count? "fas fa-times":"fas fa-bars"} onClick={mobbuton}></i>

      </div>
      </nav>
    </div>
  )
}
