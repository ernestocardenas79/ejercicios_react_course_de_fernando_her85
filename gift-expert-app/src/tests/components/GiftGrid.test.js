import React from 'react'; 
import { shallow } from 'enzyme';
import { GiftGrid } from '../../components/GiftGrid';
import '@testing-library/jest-dom';

import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Prueba de componente <GiftGrid />', () => {
    const category ='Mazinger';
    
    test('Debe de crearce el componente',()=>{

        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });

        const wrapper = shallow(<GiftGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar items cuando se cargan imágenes useFechtGifs ', () => {
        const gifs=[{
            id:'ABC',
            url:'https://cualquiercosa/imagen/cosa.jpg',
            title: 'Cualquier cosa'
        }];
        
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });

        const wrapper = shallow(<GiftGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GiftGridItem').length).toBe(gifs.length);
    })    
})
