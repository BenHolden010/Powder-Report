import PropTypes from 'prop-types';
import './Error.css'

export default function Error({error}){
  return <div className="error">
    <p>{error}</p>
  </div>
}

Error.propTypes = {
  error: PropTypes.string.isRequired
}