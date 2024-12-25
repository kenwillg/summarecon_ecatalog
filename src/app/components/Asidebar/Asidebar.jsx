'use client';

import { useState, useEffect } from 'react';
import { fetchCategories } from '../../utils/api';

export default function Asidebar({ onCategoryClick }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.error('Failed to fetch categories:', error));
  }, []);

  return (
    <aside
      className="bg-slate-700 text-white w-[20vw] h-screen p-4 flex flex-col overflow-y-auto fixed"
      style={{ top: 0, left: 0 }}
    >
      <ul className="space-y-4">
        {categories.map((category) => (
          <li
            key={category.slug} // Use slug as a unique key
            className="cursor-pointer hover:underline"
            onClick={() => onCategoryClick(category.slug)} // Pass slug to parent
          >
            {category.name} {/* Render the category name */}
          </li>
        ))}
      </ul>
    </aside>
  );
}
