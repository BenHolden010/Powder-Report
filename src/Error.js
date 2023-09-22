import PropTypes from 'prop-types';

export default function Error({error}){
  return <div className="error">
    <p>{error}</p>
  </div>
}

Error.propTypes = {
  error: PropTypes.string.isRequired
}