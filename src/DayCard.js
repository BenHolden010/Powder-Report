import './Card.css';

const DayCard = ({date, chanceofsnow, maxTempF, minTempF}) => {
    return (
      <div className='card'>
        <h3>{date}</h3>
        <p>Chance of Snowfall: {chanceofsnow}</p>
        <p>High: {maxTempF}ºF Low: {minTempF}ºF</p>
      </div>
    )
  }
  export default DayCard;