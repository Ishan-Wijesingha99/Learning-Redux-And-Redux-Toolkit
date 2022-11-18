
import { createSlice } from '@reduxjs/toolkit'



export const themeSlice = createSlice({
  name: 'theme',
  initialState: { 
    value: ''
  },
  reducers: {
    changeColour: (state, action) => {
      state.value = action.payload
    }
  }
})



export const { changeColour } = themeSlice.actions

export default themeSlice.reducer