import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import BrandLogos from '../components/BrandLogos';
import ProductCard from '../components/ProductCard';
import ShortsSlider from '../components/ShortsSlider';
import { products, youtubeShorts } from '../data/mockData';

const tabs = ['Ən çox Satılanlar', 'Yenilər', 'Sevilənlər', 'Qaçmaz Təkliflər'];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const filteredProducts = products.filter(product => product.tag === activeTab);

  return (
    <div className="bg-background dark:bg-dark-background">
      <Navbar />
      <HeroSection />
      <div className="py-12 bg-surface dark:bg-dark-surface"><BrandLogos /></div>

      <main className="container mx-auto py-16 px-6">
        {/* YouTube Shorts Section (Moved Up) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">YouTube Shorts İcmallarımız</h2>
          <p className="text-text-secondary dark:text-dark-text-secondary mt-2">Məhsullar haqqında daha çox məlumat üçün qısa videolarımız</p>
        </div>
        <ShortsSlider />

        {/* Products Section (Moved Down) */}
        <div className="text-center mt-24 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Məhsullarımız</h2>
          <p className="text-text-secondary dark:text-dark-text-secondary mt-2">Ən son modellər və ən yaxşı təkliflər</p>
        </div>
        
        <div className="flex justify-center mb-12 border-b border-border dark:border-dark-border">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 text-lg font-medium relative transition-colors ${activeTab === tab ? 'text-primary' : 'text-text-secondary dark:text-dark-text-secondary hover:text-primary'}`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" layoutId="underline" />
              )}
            </button>
          ))}
        </div>
        
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;