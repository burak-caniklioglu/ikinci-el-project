import React from 'react';
import { useProduct } from '../../contexts/ProductContext';
import Product from '../ProductItem';
import './products.scss';

function Products() {
  const { products, activeCategory } = useProduct();
  const filteredProducts = products.filter((item) => {
    if (activeCategory === 'Hepsi') {
      return item;
    } if (activeCategory === 'Diğer') {
      return item.category.name === 'Etek' || item.category.name === 'Cüzdan' || item.category.name === 'Elbise';
    }
    return item.category.name === activeCategory;
  });

  return (
    <article className="products-container">
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}

    </article>
  );
}

export default Products;
