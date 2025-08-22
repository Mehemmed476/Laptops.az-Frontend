import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import ShortsCard from './ShortsCard';
import Modal from './Modal';
import { youtubeShorts } from '../data/mockData';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ShortsSlider = () => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const handleCardClick = (videoId) => {
    setSelectedVideoId(videoId);
  };

  const closeModal = () => {
    setSelectedVideoId(null);
  };

  return (
    <>
      <div className="relative px-12">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
            1280: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {youtubeShorts.map((short) => (
            <SwiperSlide key={short.id}>
              <ShortsCard short={short} onCardClick={handleCardClick} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev-custom absolute top-1/2 -left-0 z-10 cursor-pointer bg-white/20 dark:bg-dark-surface/50 backdrop-blur-md p-2 rounded-full text-text-primary dark:text-dark-text-primary hover:bg-primary hover:text-white transition-all">
          <FiChevronLeft size={24} />
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 -right-0 z-10 cursor-pointer bg-white/20 dark:bg-dark-surface/50 backdrop-blur-md p-2 rounded-full text-text-primary dark:text-dark-text-primary hover:bg-primary hover:text-white transition-all">
          <FiChevronRight size={24} />
        </div>
      </div>

      <Modal isOpen={!!selectedVideoId} onClose={closeModal}>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </Modal>
    </>
  );
};

export default ShortsSlider;