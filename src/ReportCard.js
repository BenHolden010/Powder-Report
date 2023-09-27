import { Link } from 'react-router-dom';
import './ReportCard.css';
import PropTypes from 'prop-types';

const ReportCard = ({ location, currentSnowfall, maxSnow, id, deleteReport, allWeatherObjects, setAllWeatherObjects }) => {
    return (
      <div className='card'>
      <Link className="card-link" to={`/location/${location}`} onClick={()=>setAllWeatherObjects(allWeatherObjects)}>
        <h3>{location}</h3>
        <p>{currentSnowfall}</p>
        <p>Chance of new Snow: {maxSnow}%</p>
      </Link>
      <button className="delete-button" onClick={()=> deleteReport(id)}>🗑</button>
      </div>
    )
  }
  export default ReportCard;

  ReportCard.propTypes = {
    location: PropTypes.string.isRequired,
    currentSnowfall: PropTypes.string.isRequired, 
    maxSnow: PropTypes.number.isRequired, 
    id: PropTypes.number.isRequired,
    deleteReport: PropTypes.func.isRequired
  }