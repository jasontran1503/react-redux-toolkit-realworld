import React from 'react';
import ArticleInfo from './ArticleInfo';

const ArticleMeta = () => {
  return (
    <div className="article-meta">
      <ArticleInfo />
      <button className="btn btn-outline-primary btn-sm pull-xs-right">
        <i className="ion-heart"></i> 32
      </button>
    </div>
  );
};

export default ArticleMeta;
