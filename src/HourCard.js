import './HourCard.css'
import PropTypes from 'prop-types';

export default function HourCard({hour}){
  let stringTime
  if(hour.time === '0'){ stringTime = "12am" } 
  if(hour.time === '300'){ stringTime = "3am" } 
  if(hour.time === '600'){ stringTime = "6am" } 
  if(hour.time === '900'){ stringTime = "9am" } 
  if(hour.time === '1200'){ stringTime = "12pm" } 
  if(hour.time === '1500'){ stringTime = "3pm" } 
  if(hour.time === '1800'){ stringTime = "6pm" } 
  if(hour.time === '2100'){ stringTime = "9pm" } 
  return (
    <div className='hour-card' style={{ 
      backgroundImage: `url(${hour.bottom.map(obj=>obj.weatherIconUrl)[0][0].value})`, 
    }}>
      <h3 className='string-time'>{stringTime}</h3>
      <p>snow fall: {hour.snowfall_cm}cm</p>
    </div>
  )
}

HourCard.propTypes = {
  hour: PropTypes.shape({
      bottom: PropTypes.arrayOf(
        PropTypes.shape({
        weatherIconUrl: PropTypes.arrayOf(
          PropTypes.shape({
          value: PropTypes.string.isRequired
        }))
      })),
      snowfall_cm: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired
  }).isRequired
}