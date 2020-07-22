import {shallow} from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';
import GiftExpertApp from '../../components/GiftExpertApp';

describe('Pruebas de compoennte de <GifExpertApp />', () => {
    test('Se deb de mostrar correctamente el compoenntes ', () => {
        const wrapper = shallow(<GiftExpertApp />);

        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de mostrar una lista de categorias', () => {
      const categories = ['One Punch', 'Dragon Ball'];
      
      const wrapper = shallow(<GiftExpertApp defaultCategories= {categories} />)

      expect(wrapper.find('GiftGrid').length).toBe(categories.length);
    })
    
})
