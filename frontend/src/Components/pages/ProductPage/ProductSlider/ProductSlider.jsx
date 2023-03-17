import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Style from "../style/Style";
import "./ProductSlider.css";
export default function ProductSlider(props) {
    // function getFields(input, field) {
    //   // ya function javascript object may say value key k hesaab say aalag kr dita h or last may ak array bana dita h
    //     var output = [];
    //     for (var i=0; i < input.length ; ++i)
    //         output.push(input[i][field]);
    //     return output;
    // }
    // var img = getFields(props.proimg, "img");//hm hog ismay image ka url store krtay h
    // var uRL=getFields(props.proimg,"URL")// hm log yaha youtube link store krtay h
    // i know img k time yaha uri may kuch ni hoga but m ak component banaya hu jo dono {image or video } k time kaam aaya ga 
    var img = props.proimg;
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
  return (
    <div id="margin">
      <div id="autoslider">
        <Carousel
          responsive={responsive}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          

         {img.map((data,key)=>{
return( <Style
    img={
     data.url
    }
   />)
         })}
        </Carousel>
        ;
      </div>
    </div>
  );
}
