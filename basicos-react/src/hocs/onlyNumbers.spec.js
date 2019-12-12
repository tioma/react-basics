import React from 'react';
import { shallow } from 'enzyme';

import onlyNumbers from './onlyNumbers';

const dummyComponent = () => (<div />);
const Wrapper = onlyNumbers(dummyComponent);

const setup = () => {
  const wrapper = shallow(<Wrapper />);

  return {
    wrapper,
    instance: wrapper.instance(),
    baseComponent: wrapper.find(dummyComponent),
  };
};

describe('onlyNumbers HOC', () => {
  it('should return a wrapped component', () => {
    const { baseComponent } = setup();

    expect(baseComponent.length).toBe(1);
  });

  describe('component methods', () => {
    it('shoudl only update component state if event.key is Backspace', () => {
      const { instance } = setup();

      const mockEvent = { key: 'Backspace', stopPropagation: jest.fn(), preventDefault: jest.fn() };
      instance.validateNumbers(mockEvent);

      expect(instance.state.key).toBe('Backspace');
      expect(mockEvent.stopPropagation).not.toBeCalled();
      expect(mockEvent.preventDefault).not.toBeCalled();
    });

    it('shoudl only update component state if event.key is a number', () => {
      const { instance } = setup();

      const mockEvent = { key: '1', stopPropagation: jest.fn(), preventDefault: jest.fn() };
      instance.validateNumbers(mockEvent);

      expect(instance.state.key).toBe('1');
      expect(mockEvent.stopPropagation).not.toBeCalled();
      expect(mockEvent.preventDefault).not.toBeCalled();
    });

    it('should call peventdefault and stopPropagation when key is not a number and not Backspace', () => {
      const { instance } = setup();

      const mockEvent = { key: 'a', stopPropagation: jest.fn(), preventDefault: jest.fn() };
      instance.validateNumbers(mockEvent);

      expect(instance.state.key).toBe('a');
      expect(mockEvent.stopPropagation).toBeCalled();
      expect(mockEvent.preventDefault).toBeCalled();
    });
  });
});
