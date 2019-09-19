// This will be basically a meeting place for all of reducers.
import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

// Inside "combineReducers" we just put an object with all of our reducers that we bring in.
export default combineReducers({
  contact: contactReducer
});
