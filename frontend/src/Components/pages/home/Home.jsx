import React from 'react'
import Navebar from '../navebar/Navebar'
import IMGBAR from ".././img/IMGBAR"
import Medilepage from '../medialpage/Medilepage'
import ImageSlider from '../imageslider/ImageSlider'
import Enquri from '../Enquiry/Enquri'
import Contact from '../contact/Contact'
import Footer from "../Footer/Footer"
import { useSelector } from 'react-redux'

export default function Home() {
  const {loading} = useSelector(state=>state.productInfo);
  return (
    <div>
      <Navebar/>
      <IMGBAR/>
      <Medilepage/>
      {
        !loading ? <ImageSlider/> : <></>
      }
      {
        !loading ? <Enquri/> : <></>
      }
      
      <Footer/>
    

    </div>
  )
}
