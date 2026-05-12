import styled from 'styled-components';

export const Section = styled.section`
  padding: 80px 0;
  background-color: #fff;
  width: 100%;

  @media (max-width: 1024px) {
    display: none;
  }

`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin-left: 5%;
  margin-bottom: 50px;
  color: #333;
`;

export const SliderWrapper = styled.div`
  .swiper {
    width: 100%;
    overflow: visible;
  }

  .swiper-slide {
    width: 384px;
    height: 211px; 
    transition: all 0.4s ease;
    filter: brightness(0.4);
    transform: scale(0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide-active {
    filter: brightness(1);
    transform: scale(1.1);
    z-index: 2;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

