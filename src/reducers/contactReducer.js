import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from "../actions/types";

// Each "reducer" has its own "initialState" and it's just going to export a default function
const initialState = {
  // From "Contacts" component state moved to Redux
  contacts: [],
  // 'contact' is the part of the state that will represent the current contact that's being viewed, needed for edit page.
  // It's going to fill that value that object with the 'payload' that we get from the response.
  contact: {}
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

    case GET_CONTACT:
      return {
        // initial state
        ...state,
        // state name will be called "contact"
        contact: action.payload
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

    case UPDATE_CONTACT:
      return {
        // initial state
        ...state,
        // after mapping through the "state.contacts" array "id" will be checked if matches "contact" will be set to the "newContact" else we don't want to change it
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };

    default:
      return state;
  }
}
