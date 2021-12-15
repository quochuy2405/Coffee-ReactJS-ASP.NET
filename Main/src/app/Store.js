import { configureStore } from "@reduxjs/toolkit";
import CounterBill from "./CounterBill"
import  KMOpen  from "./KMOpen";
import  UserSlice  from "./feature/UseSlice";
const rootReducer={
  counterBill:CounterBill,
  KMOpen:KMOpen,
  User:UserSlice,
}
const store= configureStore({
  reducer:rootReducer,
})
export default store;
