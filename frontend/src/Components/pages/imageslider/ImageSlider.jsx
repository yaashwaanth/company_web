import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ImageSlider.css";
import StyleImg from "../styleimg/StyleImg.jsx";
import { useSelector } from "react-redux";



export default function ImageSlider() {
  
 const {product} = useSelector(state=>state.productInfo);

  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const fun = (e) => {
  };
  return (
    <div id="Carouselimagshow">
     <center style={{marginTop:"-30px",marginBottom:"90px"}}> <h3 style={{color:"green",fontSize:"40px",marginTop:"30px"}} >Our Products</h3></center>
      <Carousel id="Carouselbox" responsive={responsive} onClickThumb={fun}>
        {      
        product.map((item, key) => {
          return (
            <div className="boxofCarousel">
              <StyleImg id={item._id} key={key} prod={item.product_name} img={item.images[0].url}  position={key} />
              
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
