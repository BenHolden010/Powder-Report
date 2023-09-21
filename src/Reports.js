import './Reports.css';
import Card from "./ReportCard"
function Reports({ reports, deleteReport }){

  const reportCards = reports.map(report => {
    return (
      <Card
        location={report.location}
        currentSnowfall={report.currentSnowFall}
        id={report.id}
        key={report.id}
        deletereport={deleteReport}
      />
    )
  })

  return (
    <div className='reports-container'>
      {reportCards}
    </div>
  )
}
export default Reports;