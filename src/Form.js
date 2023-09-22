import { useEffect, useState } from 'react';
import './Form.css';
import sampleData from './sampleData.json'
import { Link, NavLink } from 'react-router-dom';


export default function Form({displayReport}){
  const [location, setLocation] = useState('');
  // location = 'breckenridge'
  // function submitLocations(event){
    // event.preventDefault()
  //   console.log(location)
  //   displayReport(location)
  // }

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
         <NavLink to={`/${location}`}>
          <button onClick = { () => displayReport(location)}>SUBMIT</button>
        </NavLink>
        </form>
      )}
