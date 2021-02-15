import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';
describe('Pruebas en <RealExampleREf />', () => {
  const wrapper = shallow(<RealExampleRef />);
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('debe de mostrar el componente <MultipleCustomHooks />', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
});
