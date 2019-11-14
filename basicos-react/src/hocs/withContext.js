/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import CountryContext from '../Context';

const withCountryContext = (Base) => {
  class Wrapper extends React.Component {
    render() {
      const { country } = this.context;
      return (<Base {...this.props} country={country} />);
    }
  }

  Wrapper.contextType = CountryContext;

  return Wrapper;
};

export default withCountryContext;
