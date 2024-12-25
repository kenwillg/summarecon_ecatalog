'use client';

import { useState, useEffect } from 'react';
import { fetchProductsByCategory } from '../utils/api';

export default function MainContent({ selectedCategorySlug }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (selectedCategorySlug) {
      fetchProductsByCategory(selectedCategorySlug)
        .then((data) => setProducts(data.products))
        .catch((error) => console.error('Failed to fetch products:', error));
    }
  }, [selectedCategorySlug]);

  return (
    <main
      className="flex-1 p-4 bg-slate-500"
      style={{ marginLeft: '20vw' }} // Account for Asidebar width
    >
      <h1 className="text-xl font-bold">
        {selectedCategorySlug
          ? `Products in "${selectedCategorySlug}"`
          : 'Select a Category'}
      </h1>
      <ul className="grid grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <li key={product.id} className="border p-2">
            <h2 className="font-semibold">{product.title}</h2>
            <p className="text-sm">{product.description}</p>
            <p className="text-green-600">${product.price}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
