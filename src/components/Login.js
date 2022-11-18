import React from "react";

// the useSelector hook is used to grab state values from the store, the useDispatch hook is used to change the state values in the store
import { useDispatch } from "react-redux";
// here you import that actual function that is responsible for changing the state
import { login, logout } from '../features/user'

export const Login = () => {
  // need to create variable for useDispatch()
  const dispatch = useDispatch()


  return (
    <div>
      <button onClick={
        // when the button is clicked, you change the state by running this code
        // the object you're passing into the login function is action.payload in the user.js file
        () => dispatch(login({ name: 'Ishan', age: '22', email: 'ishanwijes@gmail.com'}))
        }
      >
        Login
      </button>

      <button onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  )
}