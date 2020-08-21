import React from "react";
import styled from "styled-components";

const Articles = ({ articles, loading, error }) => {
  if (loading) return <div>spinner</div>;
  if (error && !loading) return <div>{error}</div>;
  return (
    <div className="App-Articles">
      {articles?.length > 0 &&
        !loading &&
        articles?.map((article, index) => {
          return (
            <div key={`${article.url}${index}`} className="article">
              <a href={article.url} rel="noopener noreferrer" target="_blank">
                <Title className="title">{article.title}</Title>
              </a>
              <p>{article.description}</p>
            </div>
          );
        })}
    </div>
  );
};

const Title = styled.h2`
  font-size: 16px;
`;

export default Articles;
