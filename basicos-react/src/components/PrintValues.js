import React from 'react';

const OtroComponentcustom = () => <p>Hola</p>;

const PrintValues = ({
  value, value2, country, printMessage,
}) => (
  <>
    <h2>{`Este es el primer valor: ${value}`}</h2>
    <h2>{`Este es el segundo valor: ${value2}`}</h2>

    <h3>{`el country es ${country}`}</h3>
    <button type="button" onClick={printMessage}>Mostrar mensaje</button>
    <OtroComponentcustom />
  </>
);

export default PrintValues;
