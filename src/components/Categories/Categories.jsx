/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import { useProduct } from '../../contexts/ProductContext';
import useCategories from '../../hooks/useCategories';
import './categories.scss';

function Categories() {
  const { activeCategory, setActiveCategory } = useProduct();
  const categories = useCategories();

  return (
    <section className="category-container">
      <ul className="category-area">
        {categories?.map((item) => (
          <Link to={`?category=${item.name}`} key={item.id}>
            <div
              onClick={() => setActiveCategory(item.name)}
              className={
              activeCategory === item.name
                ? 'category-area-item item-active'
                : 'category-area-item'
            }
            >
              {item.name.trim()}
            </div>
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default Categories;
