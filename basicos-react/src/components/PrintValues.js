import React from 'react';

import withCountryContext from '../hocs/withContext';

const PrintValues = ({ value, value2, country }) => (
  <>
    <h2>{`Este es el primer valor: ${value}`}</h2>
    <h2>{`Este es el segundo valor: ${value2}`}</h2>

    <h3>{`el country es ${country}`}</h3>
  </>
);

export default withCountryContext(PrintValues);
