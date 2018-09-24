import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme'
import App from './App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  shallow(<App />);
});
// it('calls onClick event on preset button click', () => {
//   const onClick = jest.fn();
//   let wrapper = mount(<App onClick={onClick} />);
//   wrapper.find('.presets button').first().simulate('click');
//   expect(onClick).toBeCalledWith()
// });
