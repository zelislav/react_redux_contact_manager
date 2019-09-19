// this is the place where calls to the API will be done
import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "./types";

export const getContacts = () => {
  return {
    // return to the "reducers", getting initial content
    type: GET_CONTACTS
  };
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
