import React from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { interpolate } from 'react-native-reanimated';
import * as S from './Nature.styled';

const { width } = Dimensions.get('window');

const DATA = [
  { id: '1', uri: 'https://example.com/nature1.jpg' },
  { id: '2', uri: 'https://example.com/nature2.jpg' },
  { id: '3', uri: 'https://example.com/nature3.jpg' },
  { id: '4', uri: 'https://example.com/nature4.jpg' },
  { id: '5', uri: 'https://example.com/nature5.jpg' },
];

export const NatureCarousel = () => {
  const baseOptions = {
    vertical: false,
    width: width * 0.6,
    height: 250,
  };

  return (
    <S.Container>
      <S.Title>Beautiful nature</S.Title>
      
      <Carousel
        {...baseOptions}
        style={{
          width: width,
          justifyContent: 'center',
        }}
        loop
        autoPlay={false}
        data={DATA}
        pagingEnabled={true}
        snapEnabled={true}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.85,
          parallaxScrollingOffset: 100,
          parallaxAdjacentItemAlpha: 0.5,
        }}
        renderItem={({ item }) => (
          <S.CardContainer>
            <S.ImageStyled 
              source={{ uri: item.uri }} 
              resizeMode="cover"
            />
          </S.CardContainer>
        )}
      />
    </S.Container>
  );
};