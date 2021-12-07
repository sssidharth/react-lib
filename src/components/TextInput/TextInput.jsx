import React from 'react';
import PropTypes from 'prop-types';
import './text_input.css';

export const TextInput = ({ label, onChange, width, value }) => {

   return (
    <div className="input-container">
    <input type="text" value={value} onChange={onChange} style={{width: width}} value={value}/>
    <label className={value && 'filled'}>
      {label}
    </label>
  </div>
   );
};

TextInput.PropTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    width: PropTypes.number,
    value: PropTypes.string
};

TextInput.defaultProps = {
    label: '',
    onChange: undefined,
    width: 200,
    value: null
}