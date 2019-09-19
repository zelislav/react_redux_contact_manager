import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "../actions/types";

// Each "reducer" has its own "initialState" and it's just going to export a default function
const initialState = {
  // From "Contacts" component state moved to Redux
  contacts: []
};

export default function(state = initialState, action) {
  // Evaluating actions by the type
  switch (action.type) {
    //  we're going to have a type of "GET_CONTACTS"
    case GET_CONTACTS:
      return {
        // initial state
        ...state,
        // to the initial state it sends along the "payload" which has all the stuff from "jsonplaceholder"
        contacts: action.payload
      };
    case DELETE_CONTACT:
      return {
        // initial state
        ...state,
        // contacts take the "state.contacts". So whatever is in there and we want to filter through.
        contacts: state.contacts.filter(
          // then for each contact we want to have a condition of where the "contact.id !== action.payload".
          // because when type of "DELETE_CONTACT" was send to "contactActions.js", "payload" just contains an "id". That's what is matched here and we want to filter that out.
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        // initial state
        ...state,
        // to the "contacts" array we will add: "payload", so "action.payload" which is the new contact and "initial state contacts" which is "...state.contacts".
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
}
