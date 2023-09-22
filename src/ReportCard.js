import './ReportCard.css';

const ReportCard = ({ location, currentSnowfall, maxSnow, id, deleteReport }) => {
    return (
      <div className='card'>
        <h3>{location}</h3>
        <p>{currentSnowfall}</p>
        <p>Chance of new Snow: {maxSnow}%</p>
        <button onClick={()=> deleteReport(id)}>🗑</button>
      </div>
    )
  }
  export default ReportCard;

  ReportCard.propTypes = {
    testProp: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    currentSnowfall: PropTypes.number.isRequired, 
    maxSnow: PropTypes.number.isRequired, 
    id: PropTypes.number.isRequired,
    deleteReport: PropTypes.func.isRequired
  }