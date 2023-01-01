
import {  LIST_ALL_PRODUCTS, DELETE_PRODUCT} from "../actions/actionType" 

const initialState = {
  productsArray: [],
  deleteProduct: [null]
   
};
// console.log("initial state", initialState)
const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ALL_PRODUCTS:
        return {
          ...state,
          productsArray: action.payload
        };
        case DELETE_PRODUCT:
            return {
              ...state,
              deleteProduct: action.payload
            };
    default:
      return state;
  }
};
export default ProductsReducer;
 