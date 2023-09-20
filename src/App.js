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
  
  useEffect(()=>{
    // getReportByCity()
    // .then(data=>console.log(data))
    
  },[])

 function addReport(newReport) {
    setReports([...reports, newReport]);
  }

  function deleteReport(id) {
    console.log(id)
    const filteredReport = reports.filter(Report => Report.id !== id);
    setReports(filteredReport)
  }

  return(
  <main className='App'>
      <h1>Powder Report</h1>
      <Form addReport={addReport} setReport={setReport} setLocation={setLocation}/>
      <Report location={location} report={report}/>
      <Reports reports={reports} deleteReport={deleteReport}/>
    </main>
  )
}

export default App;

