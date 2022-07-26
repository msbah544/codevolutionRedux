const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const reduxThunk = require("redux-thunk");
const thunk = reduxThunk.default;
const axios = require("axios");
//states
const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

//action types
const fetchUsersRequested = "fetchUsersRequested";
const fetchUsersSuceeded = "fetchUsersSuceeded";
const fetchUsersFailed = "fetchUsersFailed";

//action creators
const fetchUsersRequest = () => {
  return {
    type: fetchUsersRequested,
    payload: true,
  };
};

const fetchUsersSuccess = (APIdata) => {
  return {
    type: fetchUsersSuceeded,
    payload: APIdata,
  };
};

const fetchUsersFail = (error) => {
  return {
    type: fetchUsersFailed,
    payload: error,
  };
};

//create reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchUsersRequested:
      return { ...state, isLoading: true };
    case fetchUsersSuceeded:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: "",
      };
    case fetchUsersFailed:
      return {
        ...state,
        isLoading: false,
        data: [],
        error: action.payload,
      };
  }
};

//fetch users async action creator
const fetchUser = () => {
  return function (dispatch) {
    //set is loading
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        //get data
        const users = response.data.map((user) => {
          return user.id;
        });
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        //set error message
        dispatch(fetchUsersFail(error.message));
      });
  };
};

//create store
const store = createStore(reducer, applyMiddleware(thunk));

//get initial state
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(fetchUser());
