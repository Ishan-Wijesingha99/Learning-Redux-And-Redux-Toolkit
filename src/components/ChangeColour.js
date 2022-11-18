
import React, { useState } from "react";

// the useSelector hook is used to grab state values from the store, the useDispatch hook is used to change the state values in the store
import { useDispatch } from "react-redux";

// here you import that actual function that is responsible for changing the state
import { changeColour } from '../features/theme'



export const ChangeColour = () => {
  // we are going to create a state that tracks what is typed into the input, and because we aren't going to access this state in any other component, there is no point using redux for it, just use the standard useState hook
  const [colour, setColour] = useState('')

  // need to create variable for useDispatch()
  const dispatch = useDispatch()


  return (
    <div>
      <input
      type="text"
      // make the value on the input the same as the state variable
      value={colour}
      // change the state as the input value changes
      onChange={(event) => setColour(event.target.value)}
      />
      {/* what we're doing here is, when the button is clicked, we are changing the global state to what the local state is, we only defined colour locally, but we're passing that in as the payload to the changeColour reducer function, which will in turn change the global state value */}
      <button onClick={() => dispatch(changeColour(colour))}>
        Change Colour
      </button>
    </div>
  )
}