import sampleData from './sampleData.json'
import Form from './Form';
import  { useState, useEffect } from 'react';
import Reports from './Reports';
import Report from './Report';
import './App.css';

function App(){
  const [location, setLocation] = useState('breckenridge');
  const [report, setReport] = useState({});
  const [reports, setReports] = useState([])
  const [allWeatherObjects, setAllWeatherObjects] = useState([])

  function displayReport(location){
    // getReportByCity(location)
    // .then(data=>console.log(data))
    // console.log(report)
      console.log('Hello')
      setReport(sampleData.data)
      console.log(sampleData.data.weather)
      setAllWeatherObjects(sampleData.data.weather)
    }
    console.log(allWeatherObjects)

 function saveReport(newReport) {
  console.log(newReport)
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
      <Form setReport={setReport} setLocation={setLocation} displayReport={displayReport}/>
      <Report saveReport={saveReport} location={location} report={report} allWeatherObjects={allWeatherObjects}
      />
      <Reports reports={reports} deleteReport={deleteReport}/>
    </main>
  )
}

export default App;

