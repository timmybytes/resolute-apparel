import React from 'react';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='form__fields'>
    <input className='form__fields-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'form__fields-input-label-shrink' : ''
        } form__fields-input-label `}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
