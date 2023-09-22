import PropTypes from 'prop-types';

export default function Error({error}){
  return <p>
    {error}
  </p>
}

Error.propTypes = {
  testProp: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired
}