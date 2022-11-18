
import React, { useState } from "react";

import { changeColour } from '../features/theme'

import { useDispatch } from "react-redux";



export const ChangeColour = () => {
  // we are going to create a state that tracks what is typed into the input, and because we aren't going to access that in any other components, there is no need using redux for it, just use the standard useState hook
  const [colour, setColour] = useState('')

  const dispatch = useDispatch()


  return (
    <div>
      <input
      type="text"
      value={colour}
      onChange={(event) => setColour(event.target.value)}
      />
      {/* what we're doing here is, when the button is clicked, we are changing the global state to what the local state is, we only defined colour locally, but we're passing that in as the payload to the changeColour reducer function, which will in turn change the global state value */}
      <button onClick={() => dispatch(changeColour(colour))}>
        Change Colour
      </button>
    </div>
  )
}