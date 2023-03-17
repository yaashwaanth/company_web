import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../Actions";
import toast,{Toaster} from "react-hot-toast";


const NewProduct = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const {loading,message,error} = useSelector (state=>state.product);

  const [name, setName] = useState("");
  const [powerSource, setPowerSource] = useState("");
  const [capacity, setCapacity] = useState("");
  const [weight, setWeight] = useState("");
  const [speed, setSpeed] = useState("");
  const [batteryCapacity, setBatteryCapacity] = useState();
  const [productSold, setProductSold] = useState(1);
  const [extensions, setExtension] = useState("");
  const [images, setImage] = useState([]);
  const [videos, setVideos] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  console.log(images);

  



  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    files.forEach(file=>{
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend =()=>{
        setImage(oldImage =>[...oldImage,reader.result])
      }
      setImagesPreview(images);
    })

   
  };
  const createProductVideosChange = (e) => {
    const files = Array.from(e.target.files);

    files.forEach(file=>{
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend =()=>{
        setVideos(oldVideo =>[...oldVideo,reader.result])
      }
    })

   
  };

  const createProductSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createProduct(name,powerSource,capacity,weight,
      speed,batteryCapacity,productSold,extensions,images,videos));
    setImagesPreview([]);
  };

  useEffect(() => {
    if(error){
      console.log(error);
    }
    if(message){
      toast.success(message)
      history("/admin/profile");
    }
  }, [history,message,error]);
  return (
    <Fragment>
      <Toaster
      position="top-left"
      reverseOrder={false}
      />
      <div className="dashboard">
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Create Product</h1>

            <div>
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Power Source"
                required
                value={powerSource}
                onChange={(e) => setPowerSource(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Motor Capacity"
                required
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Product Weight"
                required
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Chain Speed"
                required
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Battery Capacity"
                required
                value={batteryCapacity}
                onChange={(e) => setBatteryCapacity(e.target.value)}
              />
            </div>
            
            <div>
              <input
                type="text"
                placeholder="Product Sold"
                required
                value={productSold}
                onChange={(e) => setProductSold(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Extensions"
                required
                value={extensions}
                onChange={(e) => setExtension(e.target.value)}
              />
            </div>

              <div>
                <input 
                type="file"
                name="image"
                accept="video/*"
                onChange={createProductVideosChange}
                multiple
              />
            </div>

              <div>
                <input 
                type="file"
                name="image"
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
            </div>

           

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>

            <Button
              id="createProductBtn"
              type="submit"
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;