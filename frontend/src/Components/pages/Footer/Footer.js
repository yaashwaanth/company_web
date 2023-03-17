import React from "react";
import {VscLocation} from 'react-icons/vsc'
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import {ImYoutube} from 'react-icons/im'
import {AiOutlineInstagram,AiFillFacebook,AiFillLinkedin} from 'react-icons/ai'


import "./Footer.css";

const Footer =()=>{
    return(
        <footer id="footer">
        <div className="leftFooter">
          <h2>Follow us on</h2>
         <ImYoutube size={40}/>
         <AiFillLinkedin size={40}/>
         <AiFillFacebook size={40}/>
         <AiOutlineInstagram size={40}/>

        </div>
        <div className="midFooter">
          <h2>Products</h2>
          <p>Brush Cutter</p>
          <p>Chain Saw</p>
          <p>more...</p>
  
          <p>Copyrights 2023 &copy; Exo Solar</p>
        </div>
  
        <div className="rightFooter">
          <div>
          <h2>Contact</h2>
         <br/>

          <p><VscLocation/>SSTC , Junwani </p>
         <p> Ground Floor<br/> Bhilai C.G<br/>India</p>
         <br/>
          <h2>Contact</h2>
         <br/>

          <p><AiOutlineMail/> expsolar@gmail.com </p>
         <br/>
          <p><BsTelephone/> 0788-323323 </p>
          </div>
        </div>
      </footer>

    );
}
export default Footer;