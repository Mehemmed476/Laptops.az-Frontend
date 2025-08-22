import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-background dark:bg-dark-background">
      <Navbar />
      <div className="container mx-auto py-12 px-6">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Məhsul Kataloqu</h1>
            <p className="text-text-secondary dark:text-dark-text-secondary mt-2">Ən son modelləri kəşf edin</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
                <div className="sticky top-40">
                    <FilterSidebar />
                </div>
            </aside>

            <main className="lg:col-span-3">
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  <AnimatePresence>
                    {currentProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </AnimatePresence>
                </motion.div>
                
                <div className="mt-12 flex justify-center items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                    <button key={number} onClick={() => paginate(number)} 
                            className={`w-10 h-10 rounded-md transition-colors ${currentPage === number ? 'bg-primary text-white' : 'bg-surface dark:bg-dark-surface hover:bg-primary/20'}`}>
                      {number}
                    </button>
                  ))}
                </div>
            </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;