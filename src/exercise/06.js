// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useState } from 'react';

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // const usernameRef = useRef(null);
  // const [errorState, setErrorState] = useState("");
  const [usernameValue, setUsernameValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // if(!errorState) {
    //   let username = usernameRef.current.value;
    //   onSubmitUsername(username);
    // }

     onSubmitUsername(usernameValue);
  } 

  const handleChange = (event) => {
    const value = event.target.value;
    // const isValidUsername = value === value.toLowerCase();
    // setErrorState(isValidUsername ? "" : "Username must be lower case");

    setUsernameValue(value.toLowerCase());
  }

  // 🐨 add the onSubmit handler to the <form> below
  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:
          <input type="text" id="usernameInput" onChange={handleChange} value={usernameValue}/>
        </label>
      </div>
      {/* <div role="alert">{errorState}</div> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
