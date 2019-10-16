import React from 'react';

const CustomInput = ({ name, value, handleChange }) => (
  <div className="field">
    <label className="label">Valor 1</label>
    <p className="control">
      <input className="input" type="text" name={name} placeholder="Escribe algo" value={value} onChange={handleChange} />
    </p>
  </div>
);

export default CustomInput;
