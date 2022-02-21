import axios from "axios";

const baseUrl = "http://18.136.193.63:8081/";
const urlAllProduct = `${baseUrl}products`;

export const getAllProduct = () => {
  return (dispatch) => {
    axios
      .get(urlAllProduct)
      .then((response) => {
        dispatch(setListAllProduct(response.data.data));
        console.log("cek response", response);
      })
      .catch((error) => {
        console.log("cek error", error);
      });
  };
};

export const setListAllProduct = (payload) => {
  return {
    type: "SET_LIST_PRODUCT",
    payload,
  };
};

export const setListCategory = (payload) => {
  return {
    type: "SET_LIST_CATEGORY",
    payload,
  };
};
