import React from 'react';
import { useProduct } from '../../contexts/ProductContext';
import Product from '../ProductItem';

function Products() {
  const { products } = useProduct();
  return (
    <article className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

    </article>
  );
}

export default Products;
