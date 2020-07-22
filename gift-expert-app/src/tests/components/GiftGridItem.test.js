import React from 'react';
import {shallow} from 'enzyme';
const { GiftGridItem } = require("../../components/GiftGridItem")

describe('Pruebas es Grift Grid Item', () => {

    const title='Un titulo';
    const url = 'https://algunaUr.com';
    const wrapper = shallow(<GiftGridItem title={title} url={url}/>);

    test('Deberia mostrar el componente corectamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el title', ()=>{
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    })

    test('Debe obtner la imagen igual a la url y al tipo de los props ', () => {
            const img = wrapper.find('img');

            expect(img.prop('src')).toBe(url);
            expect(img.prop('alt')).toBe(title);
    })

    test('debe de tener animate_fadeIn ', () => {
        const div = wrapper.find('div');
        const classNames = div.prop('className');
        
        expect(classNames.includes('animate__fadeIn')).toBe(true);
    })    
})
