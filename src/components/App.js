import React from "react";

import { ChangeColour } from "./ChangeColour";
import { Login } from "./Login";
import { Profile } from "./Profile";



export const App = () => {
  return (
    <div>
      {/* here we have 3 sibling components, we are going to use redux to access the state in one sibling component in another sibling component. Usually, the only way to do this is to create a state in the parent component and prop drill it to the siblings, but with Redux we can use a global state */}
      <Profile />
      <Login />
      <ChangeColour />
    </div>
  )
}