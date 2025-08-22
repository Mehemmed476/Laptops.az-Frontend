import React from 'react';
import { FiPlay } from 'react-icons/fi';

const ShortsCard = ({ short, onCardClick }) => {
  const thumbnailUrl = `https://i.ytimg.com/vi/${short.videoId}/hqdefault.jpg`;

  return (
    <button 
      onClick={() => onCardClick(short.videoId)}
      className="group relative aspect-[9/16] w-full bg-white/5 dark:bg-dark-surface/50 backdrop-blur-lg border border-border dark:border-dark-border rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:border-primary dark:hover:border-primary hover:-translate-y-1"
    >
      <img 
        src={thumbnailUrl} 
        alt={short.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
          <FiPlay size={40} className="ml-1"/>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="font-semibold truncate">{short.title}</h3>
        <p className="text-sm text-white/70">{short.views} baxış</p>
      </div>
    </button>
  );
};

export default ShortsCard;