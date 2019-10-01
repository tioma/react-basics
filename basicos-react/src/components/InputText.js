import React, { Component } from 'react';

class InputText extends Component {

       state = [
        { value: '' }
       ]
  
    handleChange = (e) => {
        this.setState({value: e.target.value});

    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Escribe algo" value={this.state.value} onChange={this.handleChange}></input>
                <h2>{this.state.value}</h2>
            </div>
        )
    }
}
export default InputText;