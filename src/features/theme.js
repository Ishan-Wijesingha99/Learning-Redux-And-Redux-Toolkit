
import { createSlice } from '@reduxjs/toolkit'



// this createSlice allows you to create a reducer in an easy way
export const themeSlice = createSlice({
  // pass name of slice, which is the same as the name of the state
  name: 'theme',
  // pass the initial state
  initialState: { 
    // whatever this value object/value is, will be the initial state
    value: ''
  },
  reducers: {
    // reducers are the functions where the state is actually changed
    // action is an object that contains two properties, the payload and the type
    // payload is what is passed in as the argument when the reducer function is called, so if we call login({ name: 'James' }), the payload is { name: 'James' }
    changeColour: (state, action) => {
      // inside this function is where the state will actually be changed
      // in this case, all we do is set the value object to the payload object
      state.value = action.payload
    }
  }
})


// export reducer functions
export const { changeColour } = themeSlice.actions

// export reducer
export default themeSlice.reducer