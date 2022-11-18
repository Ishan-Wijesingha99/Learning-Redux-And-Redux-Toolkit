import React from "react";

// we use this hook to grab the values of our state which are located in the store
import { useSelector } from "react-redux";


export const Profile = () => {

  // useSelector takes in a function that tells react what state you want to access from the store
  // here we are accessing the user state, and the value object inside of it
  const user = useSelector(state => state.user.value)
  console.log(user)

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}