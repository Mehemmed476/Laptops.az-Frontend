import React from 'react';

const FilterSidebar = () => {
  const brands = ['Apple', 'Dell', 'HP', 'Lenovo', 'Asus', 'Microsoft', 'Razer', 'Samsung', 'MSI'];
  const ramOptions = [8, 16, 32];

  return (
    <div className="p-6 bg-white/50 dark:bg-dark-surface/50 backdrop-blur-lg border border-border dark:border-dark-border rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-6">Filtrlər</h3>

      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-text-primary dark:text-dark-text-primary">Brend</h4>
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded text-primary focus:ring-primary/50" />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-text-primary dark:text-dark-text-primary">Qiymət Aralığı</h4>
        <div className="flex items-center gap-2">
          <input type="number" placeholder="Min ₼" className="w-full bg-background dark:bg-dark-surface border border-border dark:border-dark-border rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary" />
          <span className="text-gray-400">-</span>
          <input type="number" placeholder="Max ₼" className="w-full bg-background dark:bg-dark-surface border border-border dark:border-dark-border rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3 text-text-primary dark:text-dark-text-primary">RAM (GB)</h4>
        <div className="space-y-2">
          {ramOptions.map(ram => (
            <label key={ram} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded text-primary focus:ring-primary/50" />
              <span>{ram} GB</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;