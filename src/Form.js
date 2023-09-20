import { useState } from 'react';
import './Form.css';
import sampleData from './sampleData.json'

export default function Form({addReport, location, report, setLocation, setReport}){


function submitLocations(event){
  event.preventDefault()
  setReport(sampleData)
  
}

function submitReports(event) {
        event.preventDefault()
        const newReport = report
        addReport(newReport)
        clearInput()
  }
  function clearInput(){
        setLocation("")
        setReport({})
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
