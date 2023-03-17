import React,{useEffect,useState} from 'react';
import './enquiry.css';
import {BiUser} from "react-icons/bi";
import {RiDeleteBin7Line} from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearMessage, deleteEnquiryList, enquiryListAction } from '../../Actions';
const Enquiry = () => {


  const dispatch = useDispatch();
  const {enquiry,loading,message,error} = useSelector(state=>state.enquiry_list); 
  useEffect(() => {
    dispatch(enquiryListAction());

  }, [dispatch,message,error])
  

  

  const deleteProduct = (delId)=>{
         dispatch(deleteEnquiryList(delId));
         dispatch(clearMessage());
         

     }

  return (
    <div className='Container'>
      <h2>Enquiry List</h2>

    <div className='box'>

{
  loading ? (
    <></>
  )  :  (
    
      enquiry.map((data,key)=>{
       return(

       
     
        <QueryCart id={key} product={data.product} mobile={data.mobileNumber} onDelete={()=>deleteProduct(data._id)}/>

       )

      })
      
  )
}
   
    </div>


    </div>
  )
}

export default Enquiry

function QueryCart(props){

    //  const dispatch = useDispatch();  
    //  const deleteProduct = (delId)=>{
    //      dispatch(deleteEnquiryList(delId));


    //  }

    // useEffect(() => {
     
    // }, [])
    
     

 
     return<div className='details'>
        <BiUser size={42}/>
        <h4>Phone Number:</h4>
        <p>{props.mobile}</p>
        <h4>Product:</h4>
        {
           props.product.length===1 ? (
        <p>{props.product}</p>

        
        ):<p>{props.product[0]} , {props.product[1]}</p>
        }
           {
           }
              <button onClick={props.onDelete}>
                <RiDeleteBin7Line size={20} className='deleteBtn'/>
              </button>
      </div>
     
}