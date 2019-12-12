import React from 'react';
import { shallow } from 'enzyme';

import PrintValues from './PrintValues';

describe('<PrintValues />', () => {
  it('should match snapshot', () => {
    const component = shallow(<PrintValues />);

    expect(component).toMatchSnapshot();
  });
});
