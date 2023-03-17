import {configureStore} from "@reduxjs/toolkit";
import { getEnquiryList, getProduct, getProductDetails, productReducer, productsEnquiry, profileReducer, userReducer } from "./Components/Reducers";




const store = configureStore({
    reducer:{
    user:userReducer,
    product:productReducer,
    enquiry:productsEnquiry,
    productInfo: getProduct,
    changePassword:profileReducer,
    enquiry_list:getEnquiryList,
    singleProduct:getProductDetails
}
})

export default store;