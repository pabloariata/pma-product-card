import React from 'react';
import  renderer  from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';



describe('Pruebas en ProductImage', () => { 
   
    test('Debe de mostrar el componente con la imagen personalizada', () => { 
        

        const wrapper = renderer.create(
            <ProductImage img='https://imagen.jpg' className='clase-custom'/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('Debe de mostrar la imagen del producto', () => { 
       
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();


    });

});