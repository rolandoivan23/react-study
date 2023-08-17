import PropTypes from 'prop-types';

function Abcd(pgt) {
    return (
      <div >
        ABCD
        <span>{pgt.p1}</span>
        <span>{pgt.p2}</span>
        <span>{pgt.p3}</span>
        <span>{pgt.s1}</span>
      </div>
    );
  }

  Abcd.propTypes = {
    p1: PropTypes.number.isRequired,
    p2: PropTypes.number.isRequired,
    p3: PropTypes.string.isRequired,
  };
  
  export default Abcd;
  