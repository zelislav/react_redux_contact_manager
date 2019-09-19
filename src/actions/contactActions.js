// this is the place where calls to the API will be done
import { GET_CONTACTS } from "./types";

export const getContacts = () => {
  return {
    // return to the "reducers", getting initial content
    type: GET_CONTACTS
  };
};
