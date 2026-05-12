import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { Section, Title, SliderWrapper } from './Nature.styled';

export const Nature = () => {
  const images = [
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800',
  ];

  return (
    <Section>
      <Title>Beautiful nature</Title>
      <SliderWrapper>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt="nature" />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>
    </Section>
  );
};