import React, { useState, useEffect } from "react";
import {
  ArticlesSection,
  SectionTitle,
  ArticlesGrid,
  ArticleCard,
  ImageContainer,
  ArticleImage,
  ArticleText,
  SeeMoreMainBtn,
} from "./Articles.styled.jsx";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const apiKey = "4cb0d0900a824cada0e90e272a031922";
  const query = "pets";

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&pageSize=4&page=${page}&apiKey=${apiKey}`,
        );
        const data = await response.json();

        if (data.articles) {
          setArticles((prev) => {
            const combined = [...prev, ...data.articles];
            const unique = combined.filter(
              (article, index, self) =>
                index === self.findIndex((t) => t.url === article.url),
            );
            return unique;
          });
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [page]);

  return (
    <ArticlesSection>
      <SectionTitle>Interacting with our pets</SectionTitle>

      <ArticlesGrid>
        {articles.map((article, index) => (
          <ArticleCard key={article.url + index}>
            <ImageContainer>
              <ArticleImage
                src={
                  article.urlToImage ||
                  "https://via.placeholder.com/300x200?text=No+Image"
                }
                alt="news"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=Image+Not+Found";
                }}
              />
            </ImageContainer>
            <ArticleText>{article.title}</ArticleText>
          </ArticleCard>
        ))}
      </ArticlesGrid>

      <SeeMoreMainBtn
        onClick={() => setPage((prev) => prev + 1)}
        disabled={loading}
      >
        {loading ? "Loading..." : "See more"}
      </SeeMoreMainBtn>
    </ArticlesSection>
  );
};
