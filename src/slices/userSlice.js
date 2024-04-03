import { createSlice
 } from "@reduxjs/toolkit";
const initialState = {
    userInfo:null
}
export const userSlice = createSlice({
    name:'userInfo',
    initialState:initialState,
    reducers:{
        add:(state, action)=>{
            state.userInfo = action.payload
        }
    }
})

export const {add} = userSlice.actions;


export default userSlice.reducer;