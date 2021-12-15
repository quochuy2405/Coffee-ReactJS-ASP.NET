import { createSlice } from "@reduxjs/toolkit";

const UserSlice= createSlice({
    name:"user",
    initialState:'',
    reducers:{
        login:(state,actions)=>{
            state.user=actions.payload;
        },
        logout:(state)=>{
            state.user=null;
        },
    }
})
 const {actions,reducer}=UserSlice;
 export const {login,logout}=actions;
 export default reducer;