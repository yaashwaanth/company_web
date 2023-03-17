import React from 'react'
import img from "./planting.jpg"
import "./Medilepage.css"

export default function Medilepage() {
  return (
    <div id='AboutBox'>
      <div id='plangingdiv'>
       <img src={img} id="plantingpic" alt="" sizes=""  />
      </div>
       <div id='plantingtext'>
        <h2 className='wesupport' > We support </h2>
        <h2 className='wesupport greenText'>sustainable agriculture and imporving</h2>
        <h2 className='wesupport' >the lives of farmers worldwide.</h2>
        <p className='aboutPara para1'>Our team of experts has years of experience in the industry</p>
        <p className='aboutPara'>and we're decided to developing cutting- edge solutions</p>
        <p className='aboutPara'>that meet the unique needs of our customers.</p>
       <button className="product_btn">Products</button>

       </div>

       
      

    </div>
  )
}
