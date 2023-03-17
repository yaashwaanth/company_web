import React from "react";
import { useState,useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { productEnquiry } from "../../../Actions";
import toast,{Toaster} from "react-hot-toast";
import "./Enquri.css"
export default function Enquri() {

  const dispatch = useDispatch();
  const [check,setCheck] = useState([]);
  const [num,setNum] = useState("");
  const {product} = useSelector(state=>state.productInfo);
 



  const submitQuery =async ()=>{

       await dispatch(productEnquiry(num,check));
       const input = document.querySelector('#entermobilehome');
       const checkeddd = document.querySelector("#checkId")

       
       input.value = '';
       checkeddd.checked=false;
   
  }

  


  
  return (
    
    <div id="enquiry">
      <center style={{ marginBottom: "100px" }}>
        <h1>Contact Us</h1>
        <p>Any product enquiry ? Please contact</p>
      </center>
      <div className="contact_form">
      <center id="entermobilehomecenter" style={{marginBottom:"100px"}}>
        <input id="entermobilehome"
          
          placeholder="Enter Mobile number"
          type="text"
          name=""
          value={num}
          className="inputFeildName"
          onChange={e=>setNum(e.target.value)}
        />
      </center>
      <center>
        <div id="checkbox">
          {product.map((data, key) => {
            return (
              <span key={key} style={{marginLeft:"10px"}} className="loopofcheckbox">
                <input 
                key={key} 
                type="checkbox" 
                id="checkId" 
                name="checkbox"
                value={data.product_name} 
                onChange={e=>setCheck(oldArray=>[...oldArray,e.target.value])}/>
                <span  style={{margin:"10px"}} >{data.product_name}</span>{" "}
              </span>
            );
          })}
        </div>
      </center>
      <center>
        <button
          style={{
            backgroundColor: "black",
            color: "whitesmoke",
            padding: "10px",
            borderRadius: "12px",
            marginTop: "90px",
            marginBottom:"100px",
            cursor:"pointer"
          }}
          onClick={submitQuery}
        >
          Submit
        </button>
        <Toaster
  position="top-left"
  reverseOrder={false}
/>
      </center>
      </div>
    
    </div>
  );
}
