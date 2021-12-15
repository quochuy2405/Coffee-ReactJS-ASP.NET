import { createSlice } from "@reduxjs/toolkit";

const KMOpen= createSlice({
    name:"KM",
    initialState:false,
    reducers:{
        actionKM:function(state)
        { 
            return !state;
        },
    }
})
 const {actions,reducer}=KMOpen;
 export const {actionKM}=actions;
 export default reducer;