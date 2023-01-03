
import {  LIST_ALL_PRODUCTS, DELETE_PRODUCT, EDIT_PRODUCT, LIST_CATEGORIES, LIST_CURRENCIES} from "../actions/actionType" 

const initialState = {
  productsArray: [],
  deleteProduct: [null],
  editProduct: [null],
  categoriesArr: [],
  curenciesArray: []
   
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
            case EDIT_PRODUCT:
              return {
                ...state,
                editProduct: action.payload
              };
              case LIST_CATEGORIES:
                return {
                  ...state,
                  categoriesArr: action.payload
                };
                case LIST_CURRENCIES:
                  return {
                    ...state,
                    curenciesArray: action.payload
                  };
    default:
      return state;
  }
};
export default ProductsReducer;
 