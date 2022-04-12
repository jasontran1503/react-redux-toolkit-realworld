import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../articleModel';

const ArticleInfo = ({ article }: { article: Article }) => {
  return (
    <>
      <Link to={`/profile/${article.author.username}`}>
        <img src={article.author.image} alt={article.author.bio} />
      </Link>
      <div className="info">
        <Link to={`/profile/${article.author.username}`} className="author">
          {article.author.username}
        </Link>
        <span className="date">{article.createdAt}</span>
      </div>
    </>
  );
};

export default ArticleInfo;
