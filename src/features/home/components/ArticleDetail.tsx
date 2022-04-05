import DeleteArticle from 'common/layouts/buttons/DeleteArticle';
import EditArticle from 'common/layouts/buttons/EditArticle';
import FavoriteArticle from 'common/layouts/buttons/FavoriteArticle';
import FollowUser from 'common/layouts/buttons/FollowUser';
import React from 'react';
import ArticleInfo from './ArticleInfo';
import Comment from './Comment';
import CommentForm from './CommentForm';

const ArticleDetail = () => {
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>How to build webapps that scale</h1>

          <div className="article-meta">
            <ArticleInfo />
            <FollowUser />
            &nbsp;&nbsp;
            <FavoriteArticle />
          </div>
        </div>
      </div>
      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>
              Without further ado, we&#39;d like to welcome you to the future of mobile app
              development, freed from the shackles of native languages &amp; frameworks. Let&#39;s
              learn what the new mobile stack consists of and how it works.
            </p>
          </div>
        </div>
        <hr />
        <div className="article-actions">
          <div className="article-meta">
            <ArticleInfo />
            <EditArticle />
            &nbsp;&nbsp;
            <DeleteArticle />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <CommentForm />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
