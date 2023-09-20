import './Reports.css';
import Card from "./Card"
function Reports({ reports, deleteReport }){

  const reportCards = reports.map(report => {
    return (
      <Card
        title={report.title}
        description={report.description}
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