// Each "reducer" has its own "initialState" and it's just going to export a default function
const initialState = {};

export default function(state = initialState, action) {
  // Evaluating actions by the type
  switch (action.type) {
    default:
      return state;
  }
}
