import { createSlice } from '@reduxjs/toolkit'

const initialState= {
    info: null,
  }
export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    loadpeople:(state,action)=>{
        state.info = action.payload
    },
    removepeople:(state)=>{
        state.info = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { loadpeople,removemovie } = peopleSlice.actions

export default peopleSlice.reducer