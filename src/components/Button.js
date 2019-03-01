import PropTypes from 'prop-types';
import React from 'react';

// const Button = () => (
//   <div>
//     <button color='blue'>Cancel</button>
//   </div>
// );
function Button({ button: onHover, onClick }) {
  return (
    <div  >
      <button className='button' onClick={() => onClick('clicked')} onHover={() => onHover('hover')}>Default</button>
    </div>
  );
}

Button.propTypes = {
    onClick: PropTypes.func,
    onHover: PropTypes.func,
};

export default Button;
