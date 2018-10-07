import React from 'react';
import { shallow } from 'enzyme';
import SimpleCounter from './SimpleCounter';

describe('SimpleCounter', () => {
  let component;
  beforeEach(() => {
    component = shallow(<SimpleCounter />);
  });

  it('renders without crashing', () => {
    expect(component.length).toBe(1);
    // expect(component).toMatchSnapshot();
  });

  it('renders one increment button', () => {
    expect(component.find('button').length).toBe(1);
  });

  it('renders counter display', () => {
    expect(component.find('.counter').length).toBe(1);
  });

  describe('SimpleCounter state', () => {
    it('has a counter that starts at 0', () => {
      expect(component.state('counter')).toBe(0);
    });

    it('increments counter display on click', () => {});
  });
});
