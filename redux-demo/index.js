const redux = require("redux");
const createStore = redux.createStore;
const combineREducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

//Cake shop

//action types
//cake action types
const cakeOrdered = "cakeOrdered";
const cakeRefilled = "cakeRefilled";

//iceCraem action types
const iceCreamOrdered = "icecreamOrdered";
const iceCreamRefilled = "iceCreamRefilled";

//create actions

//action creators

//cake action creators
function orderCake() {
  return {
    type: cakeOrdered,
    payload: 1,
  };
}

const refillCake = () => {
  return {
    type: cakeRefilled,
    payload: 2,
  };
};

//iceCream action creators
const orderIceCream = (qty = 0) => {
  return {
    type: iceCreamOrdered,
    payload: qty,
  };
};

const refillIceCream = (qty = 0) => {
  return {
    type: iceCreamRefilled,
    payload: qty,
  };
};

//create app state

//cake state
const initialCakeState = {
  numOfCakes: 10,
};

//iceCream state
const initialIceCreamState = {
  numOfIceCreams: 20,
};

//create reducers

//cake reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case cakeOrdered:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };

    case cakeRefilled:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return {
        ...state,
        numOfCakes: state.numOfCakes,
      };
  }
};

//iceCream reducer
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case iceCreamOrdered:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    case iceCreamRefilled:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams,
      };
  }
};

//create store
const rootReducer = combineREducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));

//get initial state
console.log("initial state", store.getState());

//subscribe or get updated state
const unsubscribe = store.subscribe(() => {
  //console.log("updated state", store.getState());
});

//dispatch or update state

//order cake
store.dispatch(orderCake());
store.dispatch(orderCake());
//refill cake
store.dispatch(refillCake());
store.dispatch(refillCake());
//order and refill iceCream
store.dispatch(orderIceCream(2));
store.dispatch(refillIceCream(7));

//unsubscribe();
