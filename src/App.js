import './App.css'
import React from 'react'
// ÷import GenerateMap from './GenerateMap.js'

function App() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('You have submitted the form.')
  }
  return (
    <div className="wrapper">
      <h1>Welcome to Are You There Yet?</h1>
      <>
        <form onSubmit={handleSubmit}>
          <fieldset>
           <legend>Please tell us your name.</legend>
            <label htmlFor="Name ">
              <input type="text" id="Name" />
            </label>
            <br />
          </fieldset>
console.log()
          <fieldset>
            <legend>How many tasks do you need to complete?</legend>

            <input type="radio" id="taskOne" name="number" />
            <label htmlFor="taskOne">1   </label>
            <select >
              <label htmlFor='taskPullDownOne'></label>
              <option id='taskPullDownOne'>Dining</option>
              <option id='taskPullDownOne'>Exercise</option>
              <option id='taskPullDownOne'>Dry cleaners</option>
              <option id='taskPullDownOne'>Pharmacy</option>
            </select>
          
            <input type="radio" id="taskTwo" name="number" />
            <label htmlFor="taskTwo">2          </label>
            <select >
              <label htmlFor='taskPullDownTwo'></label>
              <option id='taskPullDownTwo'>Dining</option>
              <option id='taskPullDownTwo'>Exercise</option>
              <option id='taskPullDownTwo'>Dry cleaners</option>
              <option id='taskPullDownTwo'>Pharmacy</option>
            </select>
            
            <input type="radio" id="taskThree" name="number" />
            <label htmlFor="taskThree">3   </label>
            <select >
              <label htmlFor='taskPullDownThree'></label>
              <option id='taskPullDownThree'>Dining</option>
              <option id='taskPullDownThree'>Exercise</option>
              <option id='taskPullDownThree'>Dry cleaners</option>
              <option id='taskPullDownThree'>Pharmacy</option>
            </select>
          </fieldset>

           <fieldset>
           <legend>From where will you be leaving?</legend>
            <label htmlFor="origin ">
              <input type="text" id="origin" />
            </label>
            <br />
          </fieldset>

          <button type="submit">Submit</button>
        </form>
      </>
    </div>
  )
}

export default App
