// This will be basically a meeting place for all of reducers.
// Usually when you have different resources you have a certain reducer for each one.
// contact reducer will be the only one in this app.

import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

// Inside "combineReducers" we just put an object with all of our reducers that we bring in.
// In this case only one.
export default combineReducers({
  // This name is really important. When you bring in your application state from "Redux" into a component.
  // It's going to be available in the props and how we would access the "contact state" would be "this.props.contact" in this case.
  contact: contactReducer
});
