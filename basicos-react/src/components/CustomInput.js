import React from 'react';

import onlyNumbers from '../hocs/onlyNumbers';

const CustomInput = ({ name, value, handleChange, onKeyDown }) => (
  <div className="field">
    <label className="label">Valor 1</label>
    <p className="control">
      <input
        className="input"
        type="text"
        name={name}
        placeholder="Escribe algo"
        value={value}
        onChange={handleChange}
        onKeyDown={onKeyDown}
      />
    </p>
  </div>
);

export default onlyNumbers(CustomInput);
