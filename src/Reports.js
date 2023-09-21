import './Reports.css';
import ReportCard from "./ReportCard"
function Reports({ reports, deleteReport }){

  const reportCards = reports.map(report => {
    return (
      <ReportCard
        location={report.location}
        currentSnowfall={report.currentSnowfall}
        maxSnow={report.maxSnow}
        id={report.id}
        key={report.id}
        deleteReport={deleteReport}
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