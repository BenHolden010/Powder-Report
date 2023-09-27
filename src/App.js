import Form from './Form';
import  { useState, useEffect } from 'react';
import Reports from './Reports';
import Report from './Report';
import './App.css';
import { getReportByCity } from './apiCalls';
import Error from './Error';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Loading from './Loading';

function App(){
  const [reports, setReports] = useState([])
  const [allWeatherObjects, setAllWeatherObjects] = useState([])
  const [error, setError] = useState('Error: please try again later')
  const [savedNotification, setSavedNotification] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function displayReport(location){
    setSavedNotification('')
    if(!location){
      setError('please return home and enter a Location.')
      navigate('/*')
      return 
    }
    setLoading(true)
    getReportByCity(location)
    .then(data=>{
      if(data.data.error){
        setError('Unable to find any matching weather location, please return home and try again.')
        navigate('/*')
        setLoading(false)
        return 
      } 
      else if(data.data.weather){
        setAllWeatherObjects(data.data.weather)
      } else {
        navigate('/*')
        setError('Error: please try again later')
      }
      setLoading(false)
    })
    .catch(err=>{
      console.log(err)
      navigate('/*')
      setLoading(false)
    })
    }


 function saveReport(newReport) {
  if(!reports.map(report=>report.location).includes(newReport.location)){
    setReports([...reports, newReport]);
    setSavedNotification(`Congrats! You have saved this report!`)
  } else {
    setSavedNotification('You have already saved this report!')
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
      {loading ? <Loading />:
      <Routes>
        <Route path="/" element={<Form displayReport={displayReport}/>}/>
        <Route path='/*' element={<Error error={error} />}/>
        <Route path="/location/:location" element={<Report saveReport={saveReport}
          allWeatherObjects={allWeatherObjects} savedNotification={savedNotification}/>}/> 
        <Route path="/savedReports" element={<Reports reports={reports} deleteReport={deleteReport} setAllWeatherObjects={setAllWeatherObjects}/>}/>
      </Routes>}
    </main>
  )
}

export default App;