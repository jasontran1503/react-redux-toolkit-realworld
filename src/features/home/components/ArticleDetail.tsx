import { useAppDispatch } from 'app/hooks';
import ButtonGroup from 'common/layouts/buttons/ButtonGroup';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectArticle } from '../slices/article-detail/articleDetailSlice';
import articleDetailThunk from '../slices/article-detail/articleDetailThunk';
import ArticleInfo from './ArticleInfo';
import Comment from './Comment';
import CommentForm from './CommentForm';

const ArticleDetail = () => {
  const dispatch = useAppDispatch();
  const { slug } = useParams<{ slug: string }>();
  const article = useSelector(selectArticle);

  useEffect(() => {
    const getArticle = async () => {
      if (slug) {
        await dispatch(articleDetailThunk.getArticle(slug)).unwrap();
      }
    };

    getArticle();
  }, [slug]);

  return (
    <>
      {article && (
        <div className="article-page">
          <div className="banner">
            <div className="container">
              <h1>{article.title}</h1>

              <div className="article-meta">
                <ArticleInfo article={article} />
                <ButtonGroup article={article} />
              </div>
            </div>
          </div>
          <div className="container page">
            <div className="row article-content">
              <div className="col-md-12">
                <p>{article.body}</p>
              </div>
              <ul className="tag-list">
                {article.tagList.map((tag, index) => (
                  <li key={index} className="tag-default tag-pill tag-outline">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="article-actions">
              <div className="article-meta">
                <ArticleInfo article={article} />
                <ButtonGroup article={article} />
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
      )}
    </>
  );
};

export default ArticleDetail;
