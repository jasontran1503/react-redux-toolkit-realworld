import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../articleModel';
import ArticleMeta from './ArticleMeta';

const ArticlePreview = ({ article }: { article: Article }) => {
  return (
    <div className="article-preview">
      <ArticleMeta article={article} />

      <Link to={`article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tagList.map((tag, index) => (
            <li key={index} className="tag-default tag-pill tag-outline">
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
};

export default ArticlePreview;
