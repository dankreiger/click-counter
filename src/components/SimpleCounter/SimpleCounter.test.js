import React from 'react';
import { shallow } from 'enzyme';
import SimpleCounter from './SimpleCounter';

/**
 * Factory function to create a ShallowWrapper for the SimpleCounter component
 * @function setup
 * @param { object } props - Component props specific to this setup
 * @param { any } state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) =>
  shallow(<SimpleCounter {...props} />);

describe('SimpleCounter', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('renders without crashing', () => {
    expect(component.length).toBe(1);
    // expect(component).toMatchSnapshot();
  });

  describe('SimpleCounter button', () => {
    it('renders one increment button', () => {
      expect(component.find('button').length).toBe(1);
    });

    it('has text reading "Click Me"', () => {
      expect(component.find('button').text()).toBe('Click Me');
    });
  });

  describe('SimpleCounter display', () => {
    it('renders a div with class counter', () => {
      expect(component.find('div.counter').length).toBe(1);
    });

    it('displays text as 0', () => {
      expect(component.find('div.counter').text()).toBe(
        'This button has been clicked 0 times'
      );
    });

    it('displays text as 1 after button click', () => {
      component.find('button').simulate('click');
      expect(component.find('div.counter').text()).toBe(
        'This button has been clicked 1 time'
      );
    });
  });

  describe('SimpleCounter state', () => {
    it('has a counter that starts at 0', () => {
      expect(component.state('counter')).toBe(0);
    });

    it('increments counter display on click', () => {
      component.find('button').simulate('click');
      expect(component.state('counter')).toBe(1);
    });
  });
});
