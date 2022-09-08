import React from 'react';
import  renderer  from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';



describe('Pruebas en ProductTitle', () => { 
   
    test('Debe de mostrar el componente con el titulo personalizado', () => { 
        

        const wrapper = renderer.create(
            <ProductTitle title="Titulo Custom" className='clase-custom'/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('Debe de mostrar el titulo por defecto si no se especifica un titulo', () => { 
       
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();


    });

});