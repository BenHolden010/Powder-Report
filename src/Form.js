import { useState } from 'react';
import './Form.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';


function Form({displayReport}){
  const [location, setLocation] = useState('');

    return (
        <form>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={event => setLocation(event.target.value)}
          />
         <NavLink to={`/location/${location}`}>
          <button onClick = { () => displayReport(location)}>SUBMIT</button>
        </NavLink>
        </form>
      )}

      export default Form

      Form.propTypes = {
        testProp: PropTypes.string.isRequired,
        displayReport: PropTypes.func.isRequired
      }
