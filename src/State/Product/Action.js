import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS,FIND_PRODUCT_BY_ID_FAILURE,FIND_PRODUCT_BY_ID_REQUEST,FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";
import { api } from "../../config/apiConfig"

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });

  // Filter out undefined/null
  const params = new URLSearchParams();
  Object.entries(reqData).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '' && value !== 'null') {
      params.append(key, value);
    }
  });

  try {
    console.log("[Action] GET /api/products ->", `/api/products?${params.toString()}`);

    const { data } = await api.get(`/api/products?${params.toString()}`);
    console.log("product data", data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};


// export const findProducts = (reqData) => async (dispatch) => {
//     dispatch({type:FIND_PRODUCTS_REQUEST})
//     const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;
//     try {
//         // right before api.get(...)
// console.log('[Action] GET /api/products ->', `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);

//         const {data} = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
//         console.log("Request Data:", reqData);
//         console.log("product data",data)
//         dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
//     }
//     catch (error) {
//         dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
//     }
// };

export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    const { productId } = reqData;
    console.log("product id ",productId)
    try {
        const {data} = await api.get(`/api/products/id/${productId}`)
        console.log("data ",data)
        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
    }
    catch (error) {
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
};
