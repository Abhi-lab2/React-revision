import Axios from "axios";
import * as types from "./actionTypes";

const fetchDataRequest = (payload, page) => {
  return {
    type: types.FETCH_DATA_REQUEST,
    payload: payload,
    page: page,
  };
};

const fetchDataSuccess = (payload, page) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload: payload,
    page: page,
  };
};

const fetchDataFailure = (payload) => {
  return {
    type: types.FETCH_DATA_FAILIURE,
    payload: payload,
  };
};

const fetchData = (payload, page) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());

    Axios.get("/products", {
      params: {
        ...payload,
        _page: page,
        // _limit : 6,
      },
    })
      .then((r) => dispatch(fetchDataSuccess(r.data)))
      .catch((e) => dispatch(fetchDataFailure(e.data)));
  };
};

const getSingleProductRequest = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_REQUEST,
    payload: payload,
  };
};
const getSingleProductSuccess = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_SUCCESS,
    payload: payload,
  };
};

const getSingleProductFailure = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_FAILURE,
    payload: payload,
  };
};

const getSingleProduct = (id) => (dispatch) => {
  dispatch(getSingleProductRequest());

  Axios.get(`/products/${id}`)
    .then((r) => dispatch(getSingleProductSuccess(r.data)))
    .catch((e) => dispatch(getSingleProductFailure(e.data)));
};

const addProductCartRequest = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_REQUEST,
    payload: payload,
  };
};

const addProductCartSuccess = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_SUCCESS,
    payload: payload,
  };
};

const addProductCartFailure = (payload) => {
  return {
    type: types.ADD_PRODUCT_CART_FAILURE,
    payload: payload,
  };
};

const addProductCart = (product) => (dispatch) => {
  dispatch(addProductCartRequest());

  Axios.post("/cart", product)
    .then((r) => dispatch(addProductCartSuccess(r.data)))
    .catch((e) => dispatch(addProductCartFailure(e.data)));
};

const fetchCartRequest = (payload) => {
  return {
    type: types.FETCH_CART_REQUEST,
    payload: payload,
  };
};
const fetchCartSuccess = (payload) => {
  return {
    type: types.FETCH_CART_SUCCESS,
    payload: payload,
  };
};

const fetchCartFailure = (payload) => {
  return {
    type: types.FETCH_CART_FAILURE,
    payload: payload,
  };
};

const fetchCart = () => (dispatch) => {
  dispatch(fetchCartRequest());

  Axios.get("/cart")
    .then((r) => dispatch(fetchCartSuccess(r.data)))
    .catch((e) => dispatch(fetchCartFailure(e.data)));
};

const deleteProductCartRequest = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_REQUEST,
    payload: payload,
  };
};
const deleteProductCartSuccess = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_SUCCESS,
    payload: payload,
  };
};

const deleteProductCartFailure = (payload) => {
  return {
    type: types.REMOVE_PRODUCT_CART_FAILURE,
    payload: payload,
  };
};

const deleteProductCart = (id) => (dispatch) => {
  dispatch(deleteProductCartRequest());

  Axios.delete(`/cart/${id}`)
    .then((r) => dispatch(deleteProductCartSuccess(r.data)))
    .then(() => dispatch(fetchCart()))
    .catch((e) => dispatch(deleteProductCartFailure(e.data)));
};

// CART ORDER

const addOrderRequest = () => {
  return {
    type: types.ADD_ORDER_REQUEST,
  };
};
const addOrderSuccess = (payload) => {
  return {
    type: types.ADD_ORDER_SUCCESS,
    payload,
  };
};
const addOrderFailure = (payload) => {
  return {
    type: types.ADD_ORDER_FAILURE,
    payload,
  };
};

const addOrder = (payload) => (dispatch) => {
  dispatch(addOrderRequest());
  const orderPayload = [];
  for (let product of payload) {
    product && orderPayload.push(Axios.post("/orders", product));
  }
  Promise.all(orderPayload)
    .then((r) => dispatch(addOrderSuccess()))
    .then(() => dispatch(emptyCart(payload)))
    .catch((e) => dispatch(addOrderFailure(e)));
};

const emptyCartRequest = () => {
  return {
    type: types.EMPTY_CART_REQUEST,
  };
};

const emptyCartSuccess = () => {
  return {
    type: types.EMPTY_CART_SUCCESS,
  };
};
const emptyCartFailure = () => {
  return {
    type: types.EMPTY_CART_FAILURE,
  };
};

const emptyCart = (payload) => (dispatch) => {
  dispatch(emptyCartRequest());
  const deleteOrders = [];
  for (let obj of payload) {
    let temp = dispatch(deleteProductCart(obj.id));
    deleteOrders.push(temp);
  }
  Promise.all(deleteOrders)
    .then((r) => dispatch(emptyCartSuccess(r)))
    .catch((e) => dispatch(emptyCartFailure(e)));
};

// ORDERS PAGE
const fetchOrdersRequest = (payload) => {
  return {
    type: types.FETCH_ORDERS_REQUEST,
    payload,
  };
};

const fetchOrdersSuccess = (payload) => {
  return {
    type: types.FETCH_ORDERS_SUCCESS,
    payload,
  };
};

const fetchOrdersFailure = (payload) => {
  return {
    type: types.FETCH_ORDERS_FAILURE,
    payload: payload,
  };
};

const fetchOrders = (payload) => (dispatch) => {
  dispatch(fetchOrdersRequest());

  Axios.get("/orders")
    .then((r) => dispatch(fetchOrdersSuccess(r.data)))
    .catch((e) => dispatch(fetchOrdersFailure(e.data)));
};

export {
  fetchData,
  getSingleProduct,
  addProductCart,
  fetchCart,
  deleteProductCart,
  addOrder,
  emptyCart,
  fetchOrders,
};
