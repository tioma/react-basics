import React from 'react';
import { shallow } from 'enzyme';

import InputText from '.';

const setup = (overrideProps) => {
  const props = {
    country: 'AR',
    languaje: 'ES',
    setCountry: () => true,
    ...overrideProps,
  };

  const wrapper = shallow(<InputText {...props} />);

  return {
    props,
    wrapper,
    instance: wrapper.instance(),
    buttonPrimary: wrapper.find('button.button.is-primary'),
  };
};

describe('<InputText />', () => {
  it('shoould match snapshot', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  describe('component methods', () => {
    describe('.deleteFirstInput', () => {
      it('should be called on button primary click', () => {
        const deleteInput = jest.spyOn(InputText.prototype, 'deleteInput');
        const { buttonPrimary } = setup();

        expect(buttonPrimary.length).toBe(1);

        buttonPrimary.simulate('click');

        expect(deleteInput).toBeCalled();
        expect(deleteInput).toBeCalledWith('value');
        deleteInput.mockClear();
      });
    });

    describe('.deleteInput', () => {
      it('should delete state property given as argument', () => {
        const { instance } = setup();

        expect(instance.state).toMatchObject({});

        instance.setState({ value: 'something' });

        expect(instance.state.value).toBe('something');
        instance.deleteInput('value');

        expect(instance.state.value).toBe('');
      });
    });
  });
});
