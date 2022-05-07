import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProduct } from '../../contexts/ProductContext';
import useCategories from '../../hooks/useCategories';
import './categories.scss';

function Categories() {
  const { activeCategory, setActiveCategory } = useProduct();
  const [categories] = useCategories();
  const [customCategories, setCustomCategories] = useState([]);

  useEffect(() => {
    setCustomCategories([{ id: -1, name: 'Hepsi' }, ...categories.slice(0, 13), { id: categories.length, name: 'Diğer' }]);
  }, [categories]);

  return (
    <section className="category-container">
      <ul className="category-area">
        {customCategories?.map((item) => (
          <Link to={`?category=${item.name}`} key={item?.id}>
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
