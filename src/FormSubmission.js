import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <h1>Welcome to Are You There Yet?</h1>
      <form>
      <fieldset>
        <label htmlFor="Name">Name
        <input type="text" id="Name"/>
        </label>
     </fieldset>
      <button type="submit">Submit</button>
     </form>
    </div>
  )
}

export default App;