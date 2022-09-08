# Pma - Product Card

Paquete de test de deploy en NPM

### Pablo Ariata


## Ejemplo
```
import { 
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons} from 'pma-product-card';
```
```
 <ProductCard
            product={product}
            initialValues={{
                count: 4,
                // maxCount: 10
            }}
            
>
    {
        ( {reset, increaseBy, count, maxCount, isMaxCountReached} ) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons/>
            </>
        )
    }
</ProductCard>
```