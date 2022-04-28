import { useEffect, useState } from 'react';
import axios from '../api/axios';

function useCategories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          '/categories',
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const { data } = response;
        setCategories([{ id: 0, name: 'Hepsi' }, ...data.slice(0, 13), { id: data.length, name: 'Diğer' }]);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  return categories;
}

export default useCategories;
