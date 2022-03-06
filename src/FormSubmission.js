import React from 'react'
import './App.css'

export default function FormSubmission() {
    // const handleSubmit() => event => {
        .preventDefault();
        alert('You have submitted the form.');    }
        return (
        <div className="wrapper">
      <h1>Welcome to Are You There Yet?</h1>
      <form onSubmit = {handleSubmit}>
        <fieldset>
          <label htmlFor="Name ">
            <p>Name</p>
            <input type="text" id="Name" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
