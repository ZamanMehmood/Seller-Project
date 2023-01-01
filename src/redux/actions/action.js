import { LIST_ALL_PRODUCTS, DELETE_PRODUCT } from "./actionType";
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
    payload: data.data.data,
  });
};
