import React from 'react';
import PropTypes from 'prop-types';
import './button_component.css';

export const Button = ({ label, color }) => {

   return (
  <button type="button" className='button-style' style={{background: color === 'primary' ? '#007bf9'
          : color === 'secondary' ? '#d90000' : color === 'muted' ? 'grey' : '#007bf9', 
          border: color === 'secondary' ? '0.25px solid #d90000' : color === 'muted' ? 'grey' : 'inherit'}}>
      {label}
   </button>
   );
};

Button.PropTypes = {
    label: PropTypes.string,
    color: PropTypes.string
};

Button.defaultProps = {
    label: 'Button',
    color: 'primary'
}