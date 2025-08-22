import React from 'react';

const logos = [
  { name: 'Acer', src: '/images/logos/acer.png' },
  { name: 'Dell', src: '/images/logos/dell.png' },
  { name: 'HP', src: '/images/logos/hp.png' },
  { name: 'Asus', src: '/images/logos/asus.png' },
  { name: 'Lenovo', src: '/images/logos/lenovo.png' },
  { name: 'MSI', src: '/images/logos/msi.png' },
  { name: 'Samsung', src: '/images/logos/samsung.png' },
];

const BrandLogos = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <img src={logo.src} alt={logo.name} className="h-10 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <img src={logo.src} alt={logo.name} className="h-10 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandLogos;