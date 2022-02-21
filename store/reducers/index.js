import { combineReducers } from "redux";
import listPost from "./postReducers";
import adminData from "./adminReducer";
import detailItem from './detailProductsReducers'

const rootReducer = combineReducers({
   detailItem,
  listPost,
  adminData,
})

export default rootReducer;
