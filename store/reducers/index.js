import { combineReducers } from "redux";
import listPost from "./postReducers";
import adminData from "./adminReducer";

const rootReducer = combineReducers({
  listPost,
  adminData,
});

export default rootReducer;
