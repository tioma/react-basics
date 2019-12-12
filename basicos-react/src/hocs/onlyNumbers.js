import React from 'react';

const onlyNumbers = (BaseComponent) => {
  class Wrapper extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        key: '',
      };

      this.validateNumbers = this.validateNumbers.bind(this);
    }

    validateNumbers(event) {
      console.log(event.key);
      const isDelete = (event.key === 'Backspace');
      const isNumber = /^[0-9]$/i.test(event.key);

      this.setState({ key: event.key });

      console.log(this.state);

      if (!isNumber && !isDelete) {
        event.stopPropagation();
        event.preventDefault();
      }
    }

    render() {
      return (<BaseComponent {...this.props} onKeyDown={this.validateNumbers} />);
    }
  }

  return Wrapper;
};

export default onlyNumbers;
