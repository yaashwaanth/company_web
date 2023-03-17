import {createReducer} from "@reduxjs/toolkit"


export const userReducer = createReducer({loading:true},{
    loginRequest:(state) =>{
        state.loading= true;
    },
    loginSuccess:(state,action) =>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user = action.payload.user;
        state.message= action.payload.message;
    },
    loginFail:(state,action) =>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error= action.payload;
    },
    loadUserRequest:(state) =>{
        state.loading= true;
    },
    loadUserSuccess:(state,action) =>{
        state.loading=false;
        state.isAuthenticated=true; 
        state.user = action.payload;
    },
    loadUserFail:(state,action) =>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error= action.payload;
    },

    logoutUserSuccess:(state,action)=>{
        state.loading=true;
        state.user=null;
       state.isAuthenticated=false
    },
    logoutUserFail:(state,action)=>{
       state.loading=false;
       state.isAuthenticated=true;
    },

    clearError:(state)=>{
        state.error=null;
    },
    clearMessage:(state)=>{
        state.message=null;
    },
      
});

export const productReducer = createReducer({},{
    productRequest:(state)=>{
           state.loading=true;
           
    },
    productCreationSuccesfull:(state,action)=>{
           state.loading=false;
           state.product = action.payload;
           state.message=action.payload.message
    },
    productCreationFail:(state,action)=>{
           state.loading=false;
           state.error=action.payload;
    },
    clearError:(state)=>{
        state.error=null;
    },
    clearMessage:(state)=>{
        state.message=null;
    },
})

export const productsEnquiry =createReducer({loading:true},{
    enquiryRequest:(state)=>{
        state.loading=true
    },
    enquirySuccess:(state,action)=>{
        state.loading=false

        state.enquiry = action.payload.enquiry;

        state.message=action.payload.message;
    },
    enquiryFail:(state,action)=>{
        state.loading=false
        state.error=action.payload;

    },
})

export const getProduct = createReducer({loading:true},{
    loadProductRequest:(state)=>{
        state.loading=true;
    },
    loadProductSuccess:(state,action)=>{
        state.loading=false;
        state.product = action.payload;
        state.message = action.payload.message;
    },
    loadProductFail:(state,action)=>{
        state.loading=false;
        state.error = action.payload;
    }
})

export const profileReducer = createReducer({},{
    Change_Password_Request:(state)=>{
        state.loading=true;
    },
    Change_Password_Success:(state,action)=>{
        state.loading=false;
        state.isUpdated = action.payload;
    },
    Change_Password_Fail:(state,action)=>{
        state.loading=false;
        state.error = action.payload;
    }
});


// Get Enquiry list

export const getEnquiryList = createReducer({loading:true},{
    loadEnquiryListRequest:(state)=>{
        state.loading=true;
    },
    loadEnquiryListSuccess:(state,action)=>{
        state.loading=false;
        state.enquiry = action.payload;
    },
    loadEnquiryListFail:(state,action)=>{
        state.loading=false;
        state.error = action.payload;
    },
    deleteEnquiryListRequest:(state)=>{
        state.loading=true;
    },
    deleteEnquiryListSuccess:(state,action)=>{
        state.loading=false;
        state.message = action.payload;

    },
    deleteEnquiryListFail:(state,action)=>{
        state.loading=false;
        state.error = action.payload;
    },
    clearMessage:(state,action)=>{
        state.message=null
    },
    clearError:(state)=>{
        state.error=null
    }
})


// load product from url id
export const getProductDetails = createReducer({loading:true},{
    getProductDetailsRequest:(state)=>{
        state.loading=true;
    },
    getProductDetailsSuccess:(state,action)=>{
        state.loading=false;
        state.product = action.payload;
        state.message = action.payload.message;
    },
    getProductDetailsFail:(state,action)=>{
        state.loading=false;
    },
  
    deleteProductDetailsRequest:(state)=>{
        state.loading=true;
    },
    deleteProductDetailsSuccess:(state,action)=>{
        state.loading=false;
        state.message = action.payload.message;
    },
    deleteProductDetailsFail:(state,action)=>{
        state.loading=false;
    },
  
})