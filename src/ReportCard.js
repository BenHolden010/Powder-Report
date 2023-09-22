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