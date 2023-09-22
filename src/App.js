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
  const [error, setError] = useState('Error: please try again later')
  const navigate = useNavigate()

  function displayReport(location){
    if(!location){
      setError('please return home and enter a Location.')
      navigate('/*')
      return 
    }
    getReportByCity(location)
    .then(data=>{
      if(data.data.error){
        setError('Unable to find any matching weather location, please return home and try again.')
        navigate('/*')
        return 
      } 
      else if(data.data.weather){
        setAllWeatherObjects(data.data.weather)
      } else {
        navigate('/*')
        setError('Error: please try again later')
      }
    })
    .catch(err=>console.log(err))
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
        <Route path='/*' element={<Error error={error} />}/>
        <Route path="/location/:location" element={<Report saveReport={saveReport}
          allWeatherObjects={allWeatherObjects}/>}/> 
        <Route path="/savedReports" element={<Reports reports={reports} deleteReport={deleteReport}/>}/>
      </Routes>
    </main>
  )
}

export default App;

