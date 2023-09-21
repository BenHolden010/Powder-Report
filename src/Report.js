
import DayCard from "./DayCard"
import './Report.css'

function Report({location, allWeatherObjects, saveReport}){
let allSnow = allWeatherObjects.map(obj=>obj.chanceofsnow)
let reportTemplate = {
  id: Date.now(),
  location: location,
  maxSnow: Math.max(...allSnow),
  currentSnowfall: `Current Snowfall: ${allWeatherObjects.map(obj=>obj.totalSnowfall_cm)[0]}cm`,
  allWeatherObjects: allWeatherObjects
}
const days = allWeatherObjects.map(day=>{
  return <DayCard
  date={day.date}
  key={day.date}
  chanceofsnow={day.chanceofsnow} 
  maxTempF={day.bottom.map(time=>time.maxtempF)}
  minTempF={day.bottom.map(time=>time.mintempF)}
  hours={day.hourly}
  />
})

  return (
  <div className="report">
    <h2>{location} Snow Report.</h2>
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