import { LIST_ALL_PRODUCTS } from "./actionType";


export const listProducts = (productsArr) => {
     console.log("productsArr in action method", productsArr)
    return {
      type: LIST_ALL_PRODUCTS,
      payload: productsArr
    };
  };