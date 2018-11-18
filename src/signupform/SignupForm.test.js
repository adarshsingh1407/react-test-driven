import React from 'react';
import {shallow} from 'enzyme';
import SignupForm from './SignupForm';

describe('SignupForm', () => {

  it('should render correctly in debug mode', () => {
    const component = shallow(<SignupForm />);
    expect(component).toMatchSnapshot();
  });

  it('should take username input', () => {
    const handleChangeMock = jest.fn();
    const wrapper = shallow(<SignupForm />);
    const usernameInputEl = wrapper.find('#username-input');
    usernameInputEl.simulate('change', {target: {value: 'Singh'}});
    const buttonEl = wrapper.find('#signupform-submit');
    buttonEl.simulate('click');
    const usernameEl = wrapper.find('#username');
    expect(usernameEl.text()).toBe('Singh');
  });

  it('should render username', () => {
    const handleChangeMock = jest.fn();
    const wrapper = shallow(<SignupForm />);
    const buttonEl = wrapper.find('#signupform-submit');
    buttonEl.simulate('click');
    const usernameEl = wrapper.find('#username');
    expect(usernameEl.text()).toBe('Adarsh');
  });
})
