import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { 
  FiSearch, FiShoppingCart, FiGrid, FiChevronDown, FiMapPin, 
  FiHelpCircle, FiSun, FiMoon 
} from 'react-icons/fi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="flex items-center gap-1.5 hover:text-primary dark:hover:text-primary">
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </button>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Səhifə', href: '/' }, { name: 'Mağaza', href: '/shop' },
    { name: 'Haqqımızda', href: '/about' }, { name: 'Əlaqə', href: '/contact' },
  ];

  const getHeaderClasses = () => {
    if (isScrolled) {
      return "bg-white/70 dark:bg-dark-surface/70 backdrop-blur-xl shadow-lg border-b border-border dark:border-dark-border";
    }
    return "bg-transparent border-b border-transparent";
  };
  
  const getTextColor = () => isScrolled ? "text-text-primary dark:text-dark-text-primary" : "text-white";
  const getIconColor = () => isScrolled ? "text-text-secondary dark:text-dark-text-secondary" : "text-white/80";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderClasses()}`}>
      <div className="container mx-auto">
        <div className={`flex justify-between items-center py-2 px-6 text-xs transition-colors duration-300 ${getIconColor()}`}>
            <div className="flex items-center gap-2"><FiMapPin /><span>Baku, Azerbaijan</span></div>
            <div className="flex items-center gap-6">
                <a href="#" className="flex items-center gap-1.5 hover:text-primary dark:hover:text-primary"><FiHelpCircle /><span>Dəstək</span></a>
                <a href="#" className="flex items-center gap-1 hover:text-primary dark:hover:text-primary"><span>AZN | AZ</span><FiChevronDown /></a>
                <ThemeSwitcher />
            </div>
        </div>
        <div className={`border-t transition-colors duration-300 ${isScrolled ? 'border-border dark:border-dark-border' : 'border-white/20'}`}>
            <div className="flex items-center justify-between gap-8 py-4 px-6">
                <div className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
                  <Link to="/">Laptops<span className="text-primary">.az</span></Link>
                </div>
                <div className="flex-grow flex items-center gap-4">
                    <button className="bg-primary/90 hover:bg-primary text-white font-semibold flex items-center gap-2 px-4 py-2.5 rounded-lg"><FiGrid /><span>Kateqoriyalar</span></button>
                    <div className="relative w-full">
                        <input type="text" placeholder="Məhsul axtar..." className={`w-full border-2 rounded-lg py-2 pl-4 pr-12 focus:outline-none transition-colors duration-300 ${isScrolled ? 'bg-background border-border focus:border-primary text-text-primary dark:bg-dark-surface dark:border-dark-border dark:text-dark-text-primary' : 'bg-white/10 border-white/20 placeholder-white/70 text-white focus:bg-white/20'}`} />
                        <button className={`absolute top-1/2 right-1 -translate-y-1/2 p-2 rounded-md transition-colors duration-300 ${isScrolled ? 'bg-primary text-white' : 'bg-transparent text-white'}`}><FiSearch size={20}/></button>
                    </div>
                </div>
                <div className={`flex items-center gap-3 ${getTextColor()}`}>
                    <a href="#" className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 ${isScrolled ? 'border border-border hover:bg-surface' : 'border border-white/20 hover:bg-white/10'}`}><FaFacebookF size={18} /></a>
                    <a href="#" className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 ${isScrolled ? 'border border-border hover:bg-surface' : 'border border-white/20 hover:bg-white/10'}`}><FaInstagram size={18} /></a>
                    <a href="#" className={`flex items-center gap-2 font-medium px-3 py-2 rounded-lg transition-colors duration-300 ${isScrolled ? 'border border-border hover:bg-surface' : 'border border-white/20 hover:bg-white/10'}`}><FiShoppingCart /><span>Səbət</span></a>
                </div>
            </div>
        </div>
        <div className={`bg-background dark:bg-dark-surface border-t border-border dark:border-dark-border transition-all duration-300 ${isScrolled ? 'block' : 'hidden'}`}>
            <div className="container mx-auto flex items-center justify-center gap-8 py-3 px-6 text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
                {navLinks.map((link) => (<Link key={link.name} to={link.href} className="hover:text-primary transition-colors">{link.name}</Link>))}
            </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;