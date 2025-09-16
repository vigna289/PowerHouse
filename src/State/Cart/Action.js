import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS } from "./ActionType"
import { api } from "../../config/apiConfig"

export const get = () => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST })
    try {
        const { data } = await api.get(`/api/cart/`)
        dispatch({ type: GET_CART_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message })
    }
}
export const addItemToCart = (reqData) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST })
    try {
        const { data } = await api.put("/api/cart/add", reqData.data)
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
    }
}

export const removeItemToCart = (reqData) => async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST })
    try {
        const { data } = await api.del(`/api/cart_items/${reqData.cartItemId}`)
        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message })
    }
}

export const updateCartItem = (reqData) => (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST })
    try {
        const { data } = api.put(`/api/cart_items/${reqData.cartItemId}`, reqData.data)
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message })
    }
}