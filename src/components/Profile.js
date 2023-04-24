import React from "react";

// we use this hook to grab the value of a state which is located in the store
import { useSelector } from "react-redux";



export const Profile = () => {

  // useSelector takes in a function that tells react what state you want to access from the store

  // here we are accessing the user state, and the value object inside of it
  const user = useSelector(state => state.user.value)

  // here we are accessing the theme state, and the value object inside of it
  const themeColour = useSelector(state => state.theme.value)

  // should be { name: '', age: 0, email: '' } initially
  console.log(user)
  // should be '' initially
  console.log(themeColour)

  return (
    // this is just a style object that conditionally styles this div element
    // because themeColour is a state and it's changing, whenever it changes, this component will be rerendered
    <div style={{ color: themeColour }}>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}