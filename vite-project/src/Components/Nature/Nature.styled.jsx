import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 0 100px;
  background-color: #fff;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-left: 5%;
  margin-bottom: 30px;
  color: #333;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  .swiper {
    width: 100%;
    padding: 60px 0;
    overflow: visible !important;
  }

  .swiper-slide {
    width: 450px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition:
      transform 0.6s ease,
      filter 0.6s ease;
    filter: brightness(0.4);
    transform: scale(0.85);
    will-change: transform, filter;
  }

  .swiper-slide-active {
    filter: brightness(1);
    transform: scale(1.1);
    z-index: 10;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    pointer-events: none;
  }
`;
