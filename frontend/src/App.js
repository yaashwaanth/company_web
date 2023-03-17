import {React,useEffect} from "react";
import {BrowserRouter as Router , Route,Routes} from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/pages/home/Home";
import Productdetial from "./Components/pages/ProductPage/ProductPageProductDetill/Productdetial.jsx";
import {useDispatch,useSelector} from "react-redux"
import toast,{Toaster} from "react-hot-toast";
import {loadAllProductDetails, loadUser } from "./Actions";
import './App.css';
import { Profile } from "./Components/Admin/profile";
import NewProduct from "./Components/Admin/NewProduct";
import UpdatePassword from "./Components/Admin/UpdatePassword";
import Enquiry from "./Components/Admin/Enquiry"


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  
  dispatch(loadAllProductDetails());


  },[dispatch])
  


  return (<Router>
    <Routes>
    <Route  path='/'element={<Home/>} />
    <Route  path='/product/:id'element={<Productdetial/>} />
    
      {/* Admin Routes */}
    <Route   path='/login' element={<Login/>}/>
    <Route path="/admin/profile" element={<Profile/>}/>
    <Route  path='/admin/createProduct' element={<NewProduct/>}/>
    <Route  path='/admin/updatePassword' element={<UpdatePassword/>}/>
    <Route  path='/admin/enquiry' element={<Enquiry/>}/>
  
    </Routes>
  </Router>
  )
}

export default App;
