
import {  LIST_ALL_PRODUCTS} from "../actions/actionType" 

const initialState = {
  products: [],
   
};
// console.log("initial state", initialState)
const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ALL_PRODUCTS:
        return {
          ...state,
          products: action.payload
        };
    default:
      return state;
  }
};
export default ProductsReducer;