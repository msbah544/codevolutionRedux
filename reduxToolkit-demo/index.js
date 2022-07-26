const store = require("./app/store");
//const userInput = 3;
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/iceCream/iceCreamSlice").iceCreamActions;

const fetchUsers = require("./features/users/userSlice").fetchUsers;

const { fetchUsers2 } = require("./features/users/userSlice2");

//get initial state
console.log("initial state", store.getState());

//subscribe to store
const unsubscribe = store.subscribe(() => {
  return console.log("updated state", store.getState());
});

//store.dispatch(fetchUsers());
store.dispatch(fetchUsers2());

//update cake state
//store.dispatch(cakeActions.ordered(3));
//store.dispatch(cakeActions.refilled());

//update ice cream state
//store.dispatch(iceCreamActions.orderedIceCream(2));
//store.dispatch(iceCreamActions.refilledIceCream(2));
