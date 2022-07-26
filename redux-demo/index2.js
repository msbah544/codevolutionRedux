const redux = require("redux");
const createStore = redux.createStore;
//create action type
const CAKE_REFILLED = "CAKE_REFILLED";
//create action creator
const refillCake = (val = 0) => {
  return {
    type: CAKE_REFILLED,
    payload: val,
  };
};
//create initial state
const initialState = {
  numberOfCakes: 10,
};
//create reducer
const reducer = (state = initialState, action) => {
  /*switch (CAKE_REFILLED) {
    case action.type:
      state.numberOfCakes += 1;
      break;
    default:
      state.numberOfCakes;
  }*/
  if (action.type == CAKE_REFILLED) {
    return { ...state, numberOfCakes: state.numberOfCakes + action.payload };
  } else {
    return { ...state, numberOfCakes: state.numberOfCakes };
  }
};
//create store
const store = createStore(reducer);
//use store

//get initial state
console.log("initial state", store.getState());

//get updated state

store.subscribe(() => {
  console.log("updated state", store.getState());
});

//update state
store.dispatch(refillCake(1));
store.dispatch(refillCake(2));

//to unsubscribe
//unsubscribe();
