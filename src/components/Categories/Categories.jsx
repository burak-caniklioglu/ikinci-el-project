import React from 'react';
import { Link } from 'react-router-dom';
import { useProduct } from '../../contexts/ProductContext';
import useCategories from '../../hooks/useCategories';
import './categories.scss';

function Categories() {
  const { activeCategory, setActiveCategory } = useProduct();
  const [customCategories] = useCategories();

  return (
    <section className="category-container">
      <ul className="category-area">
        {customCategories?.map((item) => (
          <Link to="/" key={item?.id}>
            <div
              role="none"
              onClick={() => setActiveCategory(item?.name)}
              className={
              activeCategory === item?.name
                ? 'category-area-item item-active'
                : 'category-area-item'
            }
            >
              {item?.name.trim()}
            </div>
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default Categories;
