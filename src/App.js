import sampleData from './sampleData.json'
import Form from './Form';
import  { useState, useEffect } from 'react';
import Reports from './Reports';
import Report from './Report';
import './App.css';
import { getReportByCity } from './apiCalls';
import Error from './Error';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

function App(){
  const [reports, setReports] = useState([])
  const [allWeatherObjects, setAllWeatherObjects] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function displayReport(location){
    console.log("I am making a fetch call to " + location)
    setError('')
    if(!location){
      navigate('/error')
      setError('please enter a valid Location.')
      return 
    }
    getReportByCity(location)
    .then(data=>{
      if(data.data.error){
        setError('Unable to find any matching weather location, please return home and try again.')
        navigate('/error')
        return 
      } 
      else if(data.data.weather){
        setAllWeatherObjects(data.data.weather)
      } else {
        setError('The server is down, please try again tomorrow.')
      }
    })
    .catch(err=>console.log(err))
    // setAllWeatherObjects(sampleData.data.weather)
    }


 function saveReport(newReport) {
  if(!reports.map(report=>report.location).includes(newReport.location)){
    setReports([...reports, newReport]);
  }
  }

  function deleteReport(id) {
    const filteredReport = reports.filter(Report => Report.id !== id);
    setReports(filteredReport)
  }

  return(
  <main className='App'>
      <div className='header'>
      <Link to='/'><button className='header-button'>Home</button></Link>
      <h1>Powder Report</h1>
      <Link to='/savedReports'><button className='header-button'>Saved Reports</button></Link>
      </div>
      <Routes>
        <Route path="/" element={<Form displayReport={displayReport}/>}/>
        <Route path='/error' element={<Error error={error} />}/>
        <Route path="/location/:location" element={<Report saveReport={saveReport}
          allWeatherObjects={allWeatherObjects}/>}/> 
        <Route path="/savedReports" element={<Reports reports={reports} deleteReport={deleteReport}/>}/>
      </Routes>
    </main>
  )
}

export default App;

