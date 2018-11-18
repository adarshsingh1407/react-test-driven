import React from 'react';
import {shallow} from 'enzyme';
import SignupForm from './SignupForm';

describe('SignupForm', () => {
  it('should render correctly in debug mode', () => {
    const component = shallow(<SignupForm />);
    expect(component).toMatchSnapshot();
  })
})
