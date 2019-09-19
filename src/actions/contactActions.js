// ******************* this is the place where calls to the API will be done
import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from "./types";
import axios from "axios";

// ******************* get - GET_CONTACTS

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

// ******************* get - GET_CONTACT

// "id" needed because we're going to send an ID so that we know which contact to grab
export const getContact = id => async dispatch => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

// ******************* delete - DELETE_CONTACT

// "id" needed because it needs to know which one should be deleted
export const deleteContact = id => async dispatch => {
  // Couse is not our backend we will go with try/catch just to App be functional
  try {
    // we don't have res in this situation because we don't have any data, with delete we get empty object
    await axios.delete(`https://jsonplaceholder.typicode.com/users${id}`);
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  }
};

// ******************* post - ADD_CONTACT

// actual object "contact" is a parameter
export const addContact = contact => async dispatch => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    contact // passing in the contact
  );
  dispatch({
    type: ADD_CONTACT,
    // instead of passing "contact" directly we wanna return "res.data"
    // and now we don't need "id" in "newContact" because "jsonplaceholder" will generate "id" for us.
    payload: res.data
  });
};

// ******************* put - UPDATE_CONTACT

// This should be updated version of contact
export const updateContact = contact => async dispatch => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  );
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};
