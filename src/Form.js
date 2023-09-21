import { useEffect, useState } from 'react';
import './Form.css';
import sampleData from './sampleData.json'

export default function Form({location, report, setLocation, setReport, displayReport}){
  
  // location = 'breckenridge'
  function submitLocations(event){
    event.preventDefault()
    displayReport()
  }

  function clearInput(){
        setLocation("")
  }

    return (
        <form>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={event => setLocation(event.target.value)}
          />

          <button onClick = { event => submitLocations(event)}>SUBMIT</button>
        </form>
      )}
