
import { createSlice } from '@reduxjs/toolkit'

// this createSlice allows you to create a reducer in a easy way
export const userSlice = createSlice({
  // pass name of slice, which is the same as the name of the state
  // in this case our state will actually be a state object not a state variable
  name: 'user',
  // pass the initial state
  initialState: { 
    value: { 
      name: '',
      age: 0,
      email: ''
    }
  },
  reducers: {
    // the state variable holds the information about the previous values, so in this case, it would be the value object defined above
    // action is an object that contains two properties, the payload and the type
    // payload is an object
    login: (state, action) => {
      // inside this function is where the state will actually be changed
      // all we do is set the value object to the payload object
      state.value = action.payload
    },
    logout: (state, action) => {
      state.value = { 
        name: '',
        age: 0,
        email: ''
      }
    }
  }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
