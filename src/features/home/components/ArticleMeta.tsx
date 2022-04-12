import React from 'react';
import { Article } from '../articleModel';
import ArticleInfo from './ArticleInfo';

const ArticleMeta = ({ article }: { article: Article }) => {
  return (
    <div className="article-meta">
      <ArticleInfo article={article} />
      <button className="btn btn-outline-primary btn-sm pull-xs-right">
        <i className="ion-heart"></i> {article.favoritesCount}
      </button>
    </div>
  );
};

export default ArticleMeta;
