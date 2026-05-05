import styled from "styled-components";

export const ArticlesSection = styled.section`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #333;
`;

export const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px; 
  overflow: hidden;
  border-radius: 20px;
  background-color: #eee;
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

export const ArticleCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-height: 320px; 

  &:hover ${ArticleImage} {
    transform: scale(1.05);
  }
`;

export const ArticleText = styled.p`
  font-size: 15px;
  line-height: 1.4;
  font-weight: 500;
  color: #333;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis;
  height: 4.2em; 
`;

export const SeeMoreMainBtn = styled.button`
  background: #FFB36C;
  border: none;
  border-radius: 12px;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 700;
  color: #333;
  cursor: pointer;
  margin: 40px auto 0;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    background: #ffa04d;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;