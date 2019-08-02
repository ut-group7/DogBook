import { createSlice } from "redux-starter-kit";
export const users = createSlice({
 slice: "users", // namespace
 initialState: {
   name: "Unknown"
 },
 reducers: {
   "login": (state, action) => {
     state.name = action.payload.name;
   },
   "logout": (state, action) => {
     state.name = "Unknown";
   }
 }
});
export default users.reducer;