import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white/50 dark:bg-dark-surface/50 backdrop-blur-lg border border-border dark:border-dark-border rounded-lg shadow-lg overflow-hidden hover:border-primary dark:hover:border-primary hover:-translate-y-1"
    >
      <a href={`/product/${product.id}`}>
        <div className="h-60 flex items-center justify-center p-4">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 border-t border-border dark:border-dark-border">
          <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary truncate">{product.name}</h3>
          <p className="text-xl font-extrabold text-primary mt-2">{product.price} ₼</p>
        </div>
      </a>
      <div className="absolute top-3 right-3">
        <button className="bg-primary/80 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:scale-110">
          🛒
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;