import { createSlice } from '@reduxjs/toolkit';
import { cuestionarios } from '../utils/initialStateQuestions';

const initialState = {
    mandamientos:cuestionarios
}

export const questionsSlice = createSlice({
  name:'mandamientos',
  initialState:initialState,
  reducers:{
    edit:(state, action)=>{
      const payload = action.payload;
      console.log(payload);
      const found = state.mandamientos.find(e=>e.id === parseInt(payload.id));
      if(found){
        found.nota = payload.nota;
        found.finished = payload.finished;
      }
    }
  }
})


export const { edit } = questionsSlice.actions

export default questionsSlice.reducer



