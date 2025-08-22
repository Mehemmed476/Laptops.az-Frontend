import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      <video
        src="/videos/herosec3.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      <motion.div
        className="relative z-20 text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4"
        >
          Gələcəyi Kəşf Et
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
        >
          Yenilikçi texnologiyalarla sərhədləri aşın. Performansın və dizaynın mükəmməl harmoniyası.
        </motion.p>
        <motion.a
          variants={itemVariants}
          href="/shop"
          className="group inline-flex items-center gap-3 border border-white/50 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg hover:bg-white/10 backdrop-blur-sm"
        >
          Məhsullara Bax
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;