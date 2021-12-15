import { createSlice } from "@reduxjs/toolkit";

const CounterBill= createSlice({
    name:"CounterBill",
    initialState:localStorage.getItem("LISTBILL")?JSON.parse(localStorage.getItem("LISTBILL")).length:0,
    reducers:{
        reset(state) {
            return state-state;
          },
        increaseBill(state) {
            return state + 1;
          },
          decreaseBill(state) {
              if(state<1)
              {
                  return 0;
              }
            return state - 1;
          },
    }
});
const {actions,reducer}=CounterBill;
export const {increaseBill,decreaseBill,reset } = actions;
export default reducer;