import React, { Component } from 'react';

import PrintValues from './PrintValues';
import CustomInput from './CustomInput';

class InputText extends Component {
  constructor() {
    super();

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
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  deleteInput(valor) {
    this.setState({ [valor]: '' });
  }

  render() {
    const {
      value3, value4,
    } = this.state;
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
        <PrintValues {...this.state} />
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

export default InputText;
