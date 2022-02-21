const initialState = { listAllProduct: [], isLoading: true, listCategory: [] };

const adminReducer = (state = initialState, action) => {
  if (action.type === "SET_LIST_PRODUCT") {
    return {
      ...state,
      listAllProduct: action.payload,
    };
  } else if (action.type === "SET_LIST_CATEGORY") {
    return {
      ...state,
      listCategory: action.payload,
    };
  }
  return state;
};

export default adminReducer;
