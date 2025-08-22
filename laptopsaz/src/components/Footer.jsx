import React from 'react';
import { FaFacebookF, FaInstagram, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-surface dark:bg-dark-background pt-20 pb-10 mt-24 border-t border-border dark:border-dark-border overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient_stops))] from-primary/5 via-transparent to-transparent blur-3xl opacity-50 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold text-text-primary dark:text-white mb-4">Laptops<span className="text-primary">.az</span></h3>
            <p className="text-text-secondary dark:text-dark-text-secondary pr-8">
              Yenilikçi texnologiyalarla sərhədləri aşın.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-4">Səhifələr</h4>
            <ul className="space-y-3 text-text-secondary dark:text-dark-text-secondary">
              <li><a href="/shop" className="hover:text-primary transition-colors">Mağaza</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">Haqqımızda</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Əlaqə</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-4">Dəstək</h4>
            <ul className="space-y-3 text-text-secondary dark:text-dark-text-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Zəmanət</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Servis Mərkəzləri</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-4">Endirimlər üçün bildiriş alın</h4>
            <form className="flex items-center bg-background dark:bg-white/5 border border-border dark:border-white/10 rounded-lg backdrop-blur-sm p-1">
              <input 
                type="tel" 
                placeholder="Mobil nömrəniz... (055xxxxxxx)"
                className="flex-grow bg-transparent py-2 px-4 text-text-primary dark:text-white placeholder-text-secondary dark:placeholder-dark-text-secondary focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-primary text-white font-bold p-2.5 rounded-md hover:bg-primary-dark transition-colors"
              >
                <FaArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-border dark:border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center text-text-secondary dark:text-dark-text-secondary">
          <p className="text-sm order-2 md:order-1 mt-4 md:mt-0">&copy; {new Date().getFullYear()} Laptops.az. Bütün hüquqlar qorunur.</p>
          <div className="flex space-x-5 order-1 md:order-2">
            <a href="#" className="hover:text-primary transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;