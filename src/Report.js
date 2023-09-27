
import { useParams } from "react-router-dom"
import DayCard from "./DayCard"
import './Report.css'
import PropTypes from 'prop-types';

function Report({ allWeatherObjects, saveReport, savedNotification}){
let location = useParams().location
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
  chanceofsnow={day.chanceofsnow} 
  maxTempF={day.bottom.map(time=>time.maxtempF)}
  minTempF={day.bottom.map(time=>time.mintempF)}
  hours={day.hourly}
  key={day.date}
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
    {savedNotification && <p>{savedNotification}</p>}
    <button onClick={() => {saveReport(reportTemplate)}}>Save Report</button>
  </div>
)
}

export default Report;

Report.propTypes = {
  allWeatherObjects: PropTypes.arrayOf(
    PropTypes.shape({
    bottom: PropTypes.arrayOf(
      PropTypes.shape({
        maxtempF: PropTypes.string.isRequired,
        mintempF: PropTypes.string.isRequired
    })).isRequired,
    chanceofsnow: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    hourly: PropTypes.arrayOf(
      PropTypes.shape({
      bottom: PropTypes.arrayOf(
        PropTypes.shape({
        weatherIconUrl: PropTypes.arrayOf(
          PropTypes.shape({
          value: PropTypes.string.isRequired
        }))
      })),
      snowfall_cm: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired
    })).isRequired,
    totalSnowfall_cm: PropTypes.string.isRequired

  })).isRequired,
  saveReport: PropTypes.func.isRequired,
  savedNotification: PropTypes.string.isRequired
}