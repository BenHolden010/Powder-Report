import sampleData from './sampleData.json'
import Form from './Form';
import  { useState, useEffect } from 'react';
import Reports from './Reports';
import Report from './Report';
import './App.css';
import { getReportByCity } from './apiCalls';
import Error from './Error';

function App(){
  const [location, setLocation] = useState('');
  const [report, setReport] = useState({});
  const [reports, setReports] = useState([])
  const [allWeatherObjects, setAllWeatherObjects] = useState([])
  const [error, setError] = useState('')

  function displayReport(){
    setError('')
    if(!location){
      setError('please enter a valid Location.')
      return 
    }
    console.log(` i just fetched ${location}`)
    // getReportByCity(location)
    // .then(data=>{ console.log(data)
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
    console.log(`i just deleted id# ${id}`)
    const filteredReport = reports.filter(Report => Report.id !== id);
    setReports(filteredReport)
  }

  return(
  <main className='App'>
      <h1>Powder Report</h1>
      <Form setReport={setReport} setLocation={setLocation} displayReport={displayReport}/>
      <Error error={error} />
      <Report saveReport={saveReport} location={location} report={report} allWeatherObjects={allWeatherObjects}
      />
      <Reports reports={reports} deleteReport={deleteReport}/>
    </main>
  )
}

export default App;

