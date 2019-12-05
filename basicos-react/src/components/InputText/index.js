import React, { Component } from 'react';

import PrintValues from '../PrintValues';
import CustomInput from '../CustomInput/CustomInput';

import CountryContext from '../../Context';

class InputText extends Component {
  constructor(props, context) {
    console.log(context);
    console.log(props);
    super(props, context);

    this.state = {};

    this.formControls = [{
      name: 'value',
      value: this.state.value,
    }, {
      name: 'value2',
      value: this.state.value2,
    }];

    this.handleChange = this.handleChange.bind(this);
    this.deleteFirstInput = this.deleteInput.bind(this, 'value');
    this.deleteSecondInput = this.deleteInput.bind(this, 'value2');
    this.printMessage = this.printMessage.bind(this);
  }

  componentDidMount() {
    setTimeout(() => { this.props.setCountry('cualquier cosa'); }, 6000);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  deleteInput(valor) {
    this.setState({ [valor]: '' });
  }

  printMessage() {
    const { languaje } = this.context;
    alert(languaje);
  }

  render() {
    const {
      value3, value4,
    } = this.state;
    const { country, languaje } = this.props;
    return (
      <form>
        <div className="columns">
          <div className="column is-6">
            { this.formControls.map((formControl) => (
              <CustomInput
                key={formControl.name}
                name={formControl.name}
                value={formControl.value}
                handleChange={this.handleChange}
              />
            ))}
          </div>
          <div className="column is-6">
            <CustomInput value={value3} handleChange={this.handleChange} />
            <CustomInput value={value4} handleChange={this.handleChange} />
          </div>
        </div>
        <h1>{`Estamos en ${country}`}</h1>
        <h2>{`El lenguaje es ${languaje}`}</h2>
        <PrintValues {...this.state} printMessage={this.printMessage} />
        <div className="column">
          <div className="column is-4">
            <div className="field is-grouped">
              <p className="control">
                <button className="button is-primary" type="button" onClick={this.deleteFirstInput}>Borrar input</button>
              </p>
              <p className="control">
                <button className="button is-secondary" type="button" onClick={this.deleteSecondInput}>Borrar input 2</button>
              </p>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

InputText.contextType = CountryContext;

export default InputText;
