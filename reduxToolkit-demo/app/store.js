const configureStore = require("@reduxjs/toolkit").configureStore;
const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const createLogger = require("redux-logger");

const logger = createLogger.createLogger();

const cakeReducer = require("../features/cake/cakeSlice");

const iceCreamReducer = require("../features/iceCream/iceCreamSlice");

const userReducer = require("../features/users/userSlice");

const userReducer2 = require("../features/users/userSlice2");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    //user: userReducer,
    user2: userReducer2,
  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
