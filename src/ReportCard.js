import './Card.css';

const ReportCard = ({ location, currentSnowfall, id, deleteReport }) => {
    return (
      <div className='card'>
        <h3>{location}</h3>
        <p>{currentSnowfall}</p>
        <button onClick={()=> deleteReport(id)}>🗑</button>
      </div>
    )
  }
  export default ReportCard;