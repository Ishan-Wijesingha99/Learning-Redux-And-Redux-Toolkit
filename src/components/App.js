import React from "react";
import { ChangeColour } from "./ChangeColour";
import { Login } from "./Login";
import { Profile } from "./Profile";


export const App = () => {
  return (
    <div>
      <Profile />
      <Login />
      <ChangeColour />
    </div>
  )
}