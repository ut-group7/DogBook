import { configureStore } from "redux-starter-kit";
import users from "./reducers/users";
import createHttpRedux from "./reducers/async";

//export const getRandomDog = createHttpRedux("GET_RANDOM_DOG", "breeds/image/random", "get");


const store = configureStore({
  reducer: {
    users,
  }
});

export default store;