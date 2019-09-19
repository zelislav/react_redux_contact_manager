// ******************* Implementation of Redux

// npm i redux react-redux redux-thunk

// ******************* store.js

// "store.js" created in source folder and this is where we basically need to initialize it.
// "Store" controls "state" our "state" is held in the "store" and we're going to have "reducers" to receive actions.
// And then the "reducers" will control what trickles down into our components from the "state".

import { createStore, applyMiddleware, compose } from "redux";
// * createStore - which does just that, creates a store, initializes a store.
// * applyMiddleware - because we do have the "thunk middleware" that we need to bring in.
// * compose - allows us to basically do more than one thing.
import thunk from "redux-thunk";
// * redux-thunk - is actually a piece of middleware that we're going to need for dispatching later on.
import rootReducer from "./reducers";
// * We're going to have a folder called "reducers" which will have an "index.js" file. That's going to be our route reducer.

// The reason we're doing this is because the "createStore" method when we run it it takes an "initialState" as a parameter but we don't want to put anything in here by default.
const initialState = {};

// Only "middleware" that we wanna include this time is just "thunk"
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  // "compose" will alow us to put 2 things here
  compose(
    applyMiddleware(...middleware),
    // line for using "Redux Dev Toll"
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
