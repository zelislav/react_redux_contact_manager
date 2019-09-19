import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "../actions/types";

// Each "reducer" has its own "initialState" and it's just going to export a default function
const initialState = {
  // From "Contacts" component state moved to Redux
  contacts: [
    {
      id: 1,
      name: "User 1",
      email: "user1@gmail.com",
      phone: "111-111-1111"
    },
    {
      id: 2,
      name: "User 2",
      email: "user2@gmail.com",
      phone: "222-222-2222"
    },
    {
      id: 3,
      name: "User 3",
      email: "user3@gmail.com",
      phone: "333-333-3333"
    }
  ]
};

export default function(state = initialState, action) {
  // Evaluating actions by the type
  switch (action.type) {
    //  we're going to have a type of "GET_CONTACTS"
    case GET_CONTACTS:
      return {
        // initial state
        ...state
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
