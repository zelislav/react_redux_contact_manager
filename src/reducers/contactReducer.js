import { GET_CONTACTS } from "../actions/types";

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
    case GET_CONTACTS:
      return { ...state };
    default:
      return state;
  }
}
