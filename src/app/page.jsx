'use client';

import { useState } from 'react';
import Asidebar from './components/Asidebar/Asidebar';
import MainContent from './components/MainContent';

export default function Home() {
  const [selectedCategorySlug, setSelectedCategorySlug] = useState(null);

  return (
    <div className="flex bg-white">
      {/* Asidebar to select categories */}
      <Asidebar onCategoryClick={setSelectedCategorySlug} />

      {/* Main content to display products */}
      <MainContent selectedCategorySlug={selectedCategorySlug} />
    </div>
  );
}
