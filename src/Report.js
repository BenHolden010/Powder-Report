

function Report({location, report}){
  console.log(report)
const tempF = null
// let query = report.request[0].query
// console.log(report[0])
  return (
  <div className='report'>
    <p>Location:{location}</p>
    {/* <p>Query:{query}</p> */}
    <p>tempF: {tempF}</p>
  </div>
)
}

export default Report