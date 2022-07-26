const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");
const createUserSlice2 = require("@reduxjs/toolkit").createSlice;

//create initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};
//create async action creator
const fetchUsers2 = createAsyncThunk("user/fetchUsers2", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.id));
});
//create userSlice
const userSlice2 = createUserSlice2({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers2.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers2.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers2.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});
//export reducers and actions
module.exports = userSlice2.reducer;
module.exports.fetchUsers2 = fetchUsers2;
