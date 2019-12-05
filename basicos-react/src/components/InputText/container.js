import React from 'react';
import { connect } from 'react-redux';

import { actions as userInputActions } from '../../ducks/UserInput';
import { actions as contextActions } from '../../ducks/Context';

import InputText from '.';

const {
  setValue, setValue2, setValue3, setValue4,
} = userInputActions;
const { setCountry } = contextActions;

const InputTextContainer = (props) => (
  <InputText
    value={props.value}
    value2={props.value2}
    value3={props.value3}
    value4={props.value4}
    country={props.country}
    languaje={props.languaje}
    setValue={props.setValue}
    setValue2={props.setValue2}
    setValue3={props.setValue3}
    setValue4={props.setValue4}
    setCountry={props.setCountry}
  />
);

const mapStateToProps = (state) => {
  console.log(state);

  return ({
    value: state.userInput.value,
    value2: state.userInput.value2,
    value3: state.userInput.value3,
    value4: state.userInput.value4,
    country: state.context.country,
    languaje: state.context.languaje,
  });
};

export default connect(
  mapStateToProps,
  {
    setValue,
    setValue2,
    setValue3,
    setValue4,
    setCountry,
  },
)(InputTextContainer);
