import { configureStore } from "@reduxjs/toolkit";
import  UserSlice  from "./feature/UseSlice";
const rootReducer={
  User:UserSlice,
}
const store= configureStore({
  reducer:rootReducer,
})
export default store;
