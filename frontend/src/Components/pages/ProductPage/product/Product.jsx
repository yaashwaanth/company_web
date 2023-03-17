import React,{useEffect} from "react";
import "./product.css";
import {AiFillDelete} from 'react-icons/ai'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../../Actions";



export default function Product(props) {

  const {id} =useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const log = props.auth;

  const deleteProductbtn = ()=>{
     dispatch(deleteProduct(id));
     
  }
  useEffect(() => {
    
  }, [dispatch])
  

  return (
    <div className="Productcontaner">
      <span id="Productimgcontaner">
        <img id="Productimg" src={props.image} alt="" srcset="" />
      </span>
      <span id="Productdetialscontaner">
        <p>
          <h1 className="Productname">Product name:{props.name} </h1>
          <h3 className="Productnameh3">Product Source :{props.power}</h3>
          <h3 className="Productnameh3">Motor Capacity :{props.motor}</h3>
          <h3 className="Productnameh3" >Battery Capacity: {props.battery}</h3>
          <h3 className="Productnameh3" >Chain Speed: {props.cSpeed}</h3>
          <h3 className="Productnameh3" >Weight :{props.weight}</h3>
          {
            log? (
             
              <button 
              style={{
                border:"none",
                color:"red",
                cursor:"pointer",
                background:"none",
            }}
            onClick={deleteProductbtn}

              ><AiFillDelete size={30}/></button>
            ):(<></>)
          }
        </p>
        <button className="productbutoon" >Contact US</button> <button className="productbutoon" >Catalog</button>
      </span>
    </div>
  );
}
