import sampleData from './sampleData.json'
import Form from './Form';
import  { useState, useEffect } from 'react';
import Reports from './Reports';
import Report from './Report';
import './App.css';
import { getReportByCity } from './apiCalls';
import Error from './Error';
import { Route, Routes } from 'react-router-dom';

function App(){
  const [location, setLocation] = useState('');
  const [report, setReport] = useState({});
  const [reports, setReports] = useState([])
  const [allWeatherObjects, setAllWeatherObjects] = useState([])
  const [error, setError] = useState('')

  function displayReport(){
    // console.log("I am making a fetch call")
    // setError('')
    // if(!location){
    //   setError('please enter a valid Location.')
    //   return 
    // }
    // getReportByCity(location)
    // .then(data=>{
    //   if(data.data.error){
    //     return setError('Unable to find any matching weather location')
    //   } 
    //   else if(data.data.weather){
    //     setAllWeatherObjects(data.data.weather)
    //   }
    // })
    // .catch(err=>console.log(err))
    setAllWeatherObjects(sampleData.data.weather)
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
      <h1>Powder Report</h1>
      <Routes>
        <Route path="/" element={<Form setReport={setReport} setLocation={setLocation} displayReport={displayReport}/>}/>
        <Route path="*" element={<Error error={error} />}/>
        <Route path="/:location" element={<Report saveReport={saveReport} location={location} report={report} allWeatherObjects={allWeatherObjects}
          />}/> 
        <Route path="/savedReports" element={<Reports reports={reports} deleteReport={deleteReport}/>}/>
      </Routes>
    </main>
  )
}

export default App;

