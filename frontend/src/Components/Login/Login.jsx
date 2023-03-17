import React,{useState,useEffect} from 'react'
import {Button, Typography} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Actions';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import './Login.css'


const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    
    const {message,error,isAuthenticated}  = useSelector(state=>state.user);



    const submitHandler = (e)=>{
        dispatch(login(email,password));
        e.preventDefault();


        }

  


    
  useEffect(() => {
    if(message){
        toast(message)
        navigate("/admin/profile")
   }
   if(error){
     toast(error);
      dispatch({type:"clearError"})
   }
 if(isAuthenticated){
     navigate("/admin/profile");
 }
    
  }, [dispatch,navigate,message,error,isAuthenticated]);
  



  return (<div className="login">

  <div className="loginContainer">
      <form className='loginForm' onSubmit={submitHandler}>
            <Typography variant='h4'>
                <p>A</p>
                <p>D</p>
                <p>M</p>
                <p>I</p>
                <p style={{marginRight:"1vmax"}}>N</p>
                
                <p>P</p>
                <p>A</p>
                <p>N</p>
                <p>E</p>
                <p>L</p>
            </Typography>

            <div>
                <input 
                type="email"
                placeholder='Admin Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                type="password"
                placeholder='Admin Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <Button type='submit' variant='contained'>
                    Login
                </Button>
            </div>

      </form>
  </div>
</div>
)}

export default Login