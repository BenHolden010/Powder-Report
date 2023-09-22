import './DayCard.css';
import HourCard from './HourCard';
import PropTypes from 'prop-types';

const DayCard = ({date, chanceofsnow, maxTempF, minTempF, hours}) => {
  const weatherPerHour = hours.map(hour=>{
   return <HourCard 
   hour={hour} 
   key={hour.time}/>
  })
    return (
      <div className='day-card' >
        <h3>{date}</h3>
        <p>Chance of Snowfall: {chanceofsnow}%</p>
        <p>High: {maxTempF}ºF Low: {minTempF}ºF</p>
        <div className='hour-container'>
          {weatherPerHour}
        </div>
      </div>
    )
  }
  export default DayCard;

  DayCard.propTypes = {
    testProp: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    chanceofsnow: PropTypes.number.isRequired, 
    maxTempF: PropTypes.number.isRequired, 
    minTempF: PropTypes.number.isRequired, 
    hours: PropTypes.array.isRequired
  }