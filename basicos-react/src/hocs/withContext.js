import React from 'react';
import CountryContext from '../Context';

const withContext = (Base) => {
  class Wrapper extends React.Component {
    render() {
      return <Base {...this.props} country={this.context.country} />;
    }
  }

  Wrapper.contextType = CountryContext;

  return Wrapper;
};

export default withContext;
