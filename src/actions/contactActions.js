// this is the place where calls to the API will be done
import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "./types";
import axios from "axios";

// "redux-thunk" allow us to call directly "dispatch"
export const getContacts = () => async dispatch => {
  // Making request to "jsonplaceholder"
  // We want to get the response and then to add that as a payload to "GET_CONTACTS"
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  // instead of calling "return" we wanna wrap it in "dispatch"
  dispatch({
    type: GET_CONTACTS,
    // we can access to response data with "res.data"
    payload: res.data
  });
};

// "id" needed because it needs to know which one should be deleted
export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};

// actual object "contact" is a parameter
export const addContact = contact => {
  return {
    type: ADD_CONTACT,
    payload: contact
  };
};
