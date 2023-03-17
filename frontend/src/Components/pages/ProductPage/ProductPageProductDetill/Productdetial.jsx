import React,{useEffect} from "react";
import "./Productdetial.css";
import Navebar from "../../navebar/Navebar";
import Product from "../product/Product"
import Contact from "../../contact/Contact";
import ProductSlider from "../ProductSlider/ProductSlider";
import ProductSlider2 from "../ProductSlider2/ProductSlider";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../../../Actions";
import { useSelector } from "react-redux";

export default function Productdetial() {



  const dispatch = useDispatch();
  const {id} = useParams();
   const {loading,product} = useSelector(state=>state.singleProduct);
   const {isAuthenticated}=useSelector(state=>state.user);




  useEffect(() => {
   dispatch(getSingleProduct(id));
  }, [dispatch]);
  



  return (
    <div>
      <Navebar />
      {
        loading ? (<></>) : (
          <>
          <Product 
          image={product.images[0].url}
          name={product.product_name}
          power={product.product_powerSource}
          cSpeed={product.product_chainSpeed}
          weight={product.product_weight}
          battery={product.product_batteryCapacity}
          motor={product.product_motorCapacity}
          auth ={isAuthenticated}
          />
          <h1 className="text">Images</h1>
          <ProductSlider proimg={product.images} />
          <h1 className="text">Videos</h1>
          <ProductSlider2 proimg={product.product_videos} />
          </>
        )

      }
  
   <Contact/>
    </div>
  );
}
