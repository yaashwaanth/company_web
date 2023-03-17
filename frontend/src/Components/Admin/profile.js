import React, { Fragment ,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { loadUser, logout } from '../../Actions';
import "./Profile.css"
import Sidebar from './sidebar';

export const Profile = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
     const {user,loading,isAuthenticated} = useSelector(state =>state.user);

    const logoutBtn =()=>{
      dispatch(logout());

    }
   
    // useEffect(() => {
    //  if(){

    //  }

      

    // }, [history]);
    

  return (
      <Fragment>
      {
      !loading ? (
            <div className='profileContainer'>
           
            <div className='slidebar'>
                <Sidebar/>
            </div>
    
            <div className='mainBox'>
           
            <div>
                   <h4>Name</h4>
                   <p>{user.name}</p>
    
             </div>
    
            <div>
                   <h4>Email</h4>
                   <p>{user.email}</p>
            </div>
    
            <div>
                   <Link to="/">Home</Link>
                   <Link to="/admin/updatePassword">Change password</Link>
                   <Link to="">
                     <button
                     style={{
                       background:"none",
                       color:'white',
                       border:"none"
                     }}
                     onClick={logoutBtn}
                     >Logout</button>
                   </Link>
           </div>
    
    
            </div>
    
             
    
         </div>
      )  : (<>
      
     {
       history("/")
     }
      </>)
    }
    </Fragment>


  );
};
