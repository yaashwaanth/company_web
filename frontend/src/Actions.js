import axios from "axios";


export const login = (email,password) => async(dispatch)=>{
    try{
        dispatch({type:"loginRequest"});

       const {data} = await axios.post(`api/login`,{email,password},{
            headers:{
                'Content-type':'application/json'
            },
            withCredentials: true
        });
        dispatch({
            type:"loginSuccess",
            payload:data
        });

    }catch(error){
        dispatch({
            type:"loginFail",
            payload:error.response.data.message
        })
    }
}
export const loadUser =() => async(dispatch)=>{
    try{
        dispatch({type:"loadUserRequest"});

      const {data} = await axios.post('/api/me');
        dispatch({
            type:"loadUserSuccess",
            payload:data.user
        });

    }catch(error){
        dispatch({
            type:"loadUserFail",
            payload:error.response.data.message
        })
    }
}


// product actions

export const createProduct = (name,powerSource,capacity,weight,speed,batteryCapacity,productSold,extensions,images,videos) =>
        async(dispatch)=>{
            try{
                dispatch({type:"productRequest"});

                const {data} = await axios.post(`/api/createProduct`,{
                    product_name:name,
                    product_powerSource:powerSource,
                    product_motorCapacity:capacity,
                    product_weight:weight,
                    product_chainSpeed:speed,
                    product_batteryCapacity:batteryCapacity,
                    productsSold:productSold,
                    extensions:extensions,
                    images,
                    product_videos:videos,
                },{
                    headers: { "Content-Type": "application/json" },
                })
                dispatch({type:"productCreationSuccesfull",
                   payload:data
            });
            }catch(error){
                dispatch({type:"productCreationFail",
                           payload:error.response.data.message
                      
            });

            }
        }



// Product Enquiry

export const productEnquiry = (number,products) => async(dispatch) =>{


    try{
        dispatch({type:"enquiryRequest"});

const {data} = await axios.post('/api/createEnquiry',{
    mobileNumber:number,
    product:products});

dispatch({
    type:"enquirySuccess",
    payload:data.enquiry
})
    }
catch(error){
    dispatch({
        type:"enquiryFail",
        payload:error.response.data.message
    })
}

}

// Get all products

export const loadAllProductDetails = () =>async(dispatch)=>{
    try{

        dispatch({
            type:"loadProductRequest"
        });

        const {data} = await axios.get(`/api/allProducts`);
       
        dispatch({
            type:"loadProductSuccess",
            payload:data.products,
            message:data.message,
        })
        console.log(data);
    }catch(error){
        dispatch({
            type:"loadProductFail",
            payload:error.response.data.message
        })
    }
}


// change password

export const profilePasswordChange =(oldPassword,newPassword,confirmPassword)=>async(dispatch)=>{

   try{
       dispatch({
           type:"Change_Password_Request"
       });

       const {data} = await axios.put(`/api/changePassword`,{
        oldPassword,newPassword,confirmPassword
       },{
        headers:{
            'Content-type':'application/json'
        },
        withCredentials: true
       },)

       dispatch({
           type:"Change_Password_Success",
           payload:data
       });

   }catch(error){
       dispatch({
           type:"Change_Password_Fail",
           payload:error.response.data.message
       })
   }


}


// admin enquiry forms
export const enquiryListAction = () =>async(dispatch)=>{
    try{

        dispatch({
            type:"loadEnquiryListRequest"
        });

        const {data} = await axios.get(`/api/allEnquiry`);
       
        dispatch({
            type:"loadEnquiryListSuccess",
            payload:data.enquiry,
            message:data.message,
        })
        console.log(data);
    }catch(error){
        dispatch({
            type:"loadEnquiryListFail",
            payload:error.response.data.message
        })
    }
}

// get product by url id
export const getSingleProduct = (id) =>async(dispatch)=>{
    try{

        dispatch({
            type:"getProductDetailsRequest"
        });

        const {data} = await axios.get(`/api/product/${id}`);
       
        dispatch({
            type:"getProductDetailsSuccess",
            payload:data.product,
            message:data.message,
        })
        console.log(data);
    }catch(error){
        dispatch({
            type:"getProductDetailsFail",
            payload:error.response.data.message
        })
    }
}



// logout
export const logout = ()=>async(dispatch)=>{
    try{
        await axios.get(`/api/logout`);
        dispatch({
            type:"logoutUserSuccess"
        });
    }catch(error){
        dispatch({
            type:"logoutUserFail",
            payload:error.response.data.message})
    }
}

// delete enquiry 
export const deleteEnquiryList = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "deleteEnquiryListRequest",
      });
  
      const { data } = await axios.delete(`/api/deleteEnquiry/${id}`);
  
      dispatch({
        type: "deleteEnquiryListSuccess",
        payload: data.message,
      });

     
    } catch (error) {
      dispatch({
        type: "deleteEnquiryListFail",
        payload: error.response.data.message,
      });
      
    }
  };





// delete product
export const deleteProduct = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "deleteProductDetailsRequest",
      });
  
      const { data } = await axios.delete(`/api/product/${id}`);
  
      dispatch({
        type: "deleteProductDetailsSuccess",
        payload: data.message,
      });

     
    } catch (error) {
      dispatch({
        type: "deleteProductDetailsFail",
        payload: error.response.data.message,
      });
      
    }
  };


  export const clearMessage = () =>async(dispatch)=>{
    dispatch({type:"clearMessage"});
}


