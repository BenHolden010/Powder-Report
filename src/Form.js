import { useState } from 'react';
import './Form.css';
import sampleData from './sampleData.json'

export default function Form({addReport, location, report, setLocation, setReport}){
  
  location = 'breckenridge'
  function submitLocations(event){
    event.preventDefault()
    if(location === 'breckenridge'){
      setReport(sampleData.data)
      console.log(sampleData.data.weather[0].bottom[0].maxtempF)
      // console.log(report)
    }
  }

function submitReports(event) {
        event.preventDefault()
        const newReport = report
        addReport(newReport)
        clearInput()
  }
  function clearInput(){
        setLocation("")
        // setReport({})
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
