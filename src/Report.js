
import DayCard from "./DayCard"
import './Report.css'

function Report({location, allWeatherObjects, saveReport}){
let reportTemplate = {
  id: Date.now(),
  location: location,
  currentSnowfall: `Current Snowfall: ${allWeatherObjects.map(obj=>obj.totalSnowfall_cm)[0]}cm`,
  allWeatherObjects: allWeatherObjects
}
const days = allWeatherObjects.map(day=>{
  return <DayCard
  date={day.date}
  chanceofsnow={day.chanceofsnow} 
  maxTempF={day.bottom.map(time=>time.maxtempF)}
  minTempF={day.bottom.map(time=>time.mintempF)}
  />
})

  return (
  <div >
    <h2>{location} 7 day forecast.</h2>
    <h3>
      Current Snowfall: {allWeatherObjects.map(obj=>obj.totalSnowfall_cm)[0]}cm</h3>
    <div className='report-container'>
    {days}
    </div>
    <button onClick={(event) => {saveReport(reportTemplate)}}>Save Report</button>
  </div>
)
}

export default Report