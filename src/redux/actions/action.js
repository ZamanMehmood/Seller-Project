import { LIST_ALL_PRODUCTS, DELETE_PRODUCT, EDIT_PRODUCT, LIST_CATEGORIES , LIST_CURRENCIES} from "./actionType";
import axios from "axios";

// list all products
export const listProducts = (pageNumber, pageLimit) => async (dispatch) => {
  console.log("pageNumber in action", pageNumber);
  console.log("pageLimit in action", pageLimit);

  const data = await axios.get(
    `http://localhost:8081/products/getProducts?page=${pageNumber}&pageLimit=${pageLimit}`
  );
  console.log(data);
  dispatch({
    type: LIST_ALL_PRODUCTS,
    payload: data,
  });
};

export const deleteProduct = (id) => async (dispatch) => {
  console.log(" product params.id in action method", id);
  // console.log("pageLimit in action", pageLimit);

  const data = await axios.delete(
    `http://localhost:8081/products/${id}`
  );
  console.log("data of delte product",data);
  dispatch({
    type: DELETE_PRODUCT,
    payload: data.data,
  });
};


export const editProducts = (id) => async (dispatch) => {
  console.log(" product params.id in action method", id);
  // console.log("pageLimit in action", pageLimit);

  const data = await axios.get(
    `http://localhost:8081/products/${id}`
  );
  console.log("data of edit product",data);
  dispatch({
    type: EDIT_PRODUCT,
    payload: data.data,
  });
};
 
export const listCategories = () => async(dispatch) =>{
  const data = await axios.get('http://localhost:8081/categories');
  console.log("data of categories in action",data);
  
  dispatch({
    type: LIST_CATEGORIES,
    payload: data,
  });
}

export const listCurrencies = () => async(dispatch) =>{
  const data = await axios.get('http://localhost:8081/currencies/getCurrencies');
  console.log("currencies data in action method =====>",data);
  
  dispatch({
    type: LIST_CURRENCIES,
    payload: data,
  });
}