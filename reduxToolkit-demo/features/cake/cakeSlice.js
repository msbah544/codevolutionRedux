const createSlice = require("@reduxjs/toolkit").createSlice;

//create initial state
const initialState = {
  numOfCakes: 10,
};

//create cakeSlice
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      return { ...state, numOfCakes: state.numOfCakes - action.payload };
    },
    refilled: (state = initialState, action) => {
      return { ...state, numOfCakes: state.numOfCakes + 1 };
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
