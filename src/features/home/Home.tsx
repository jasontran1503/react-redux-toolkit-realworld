import { useAppDispatch } from 'app/hooks';
import { selectUser } from 'features/auth/authSlice';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import articleApi from './articleApi';
import { ArticleTab } from './articleModel';
import ArticlePreview from './components/ArticlePreview';
import Tag from './components/Tag';
import './Home.css';
import { selectArticles, selectLoading } from './slices/article-list/articleListSlice';
import articleListThunk from './slices/article-list/articleListThunk';

const Home = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);
  const articles = useSelector(selectArticles);
  const loading = useSelector(selectLoading);

  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState<string | undefined>();
  const [tab, setTab] = useState<ArticleTab>(ArticleTab.GLOBAL);

  const getArticlesGlobal = async () => {
    setTab(ArticleTab.GLOBAL);
    await dispatch(articleListThunk.getArticlesGlobal(tag)).unwrap();
  };

  const getArticlesFeed = async () => {
    setTab(ArticleTab.FEED);
    // setTag(undefined);
    await dispatch(articleListThunk.getArticlesFeed()).unwrap();
  };

  const handleTagClicked = (tag: string) => {
    // setTab(ArticleTab.TAG);
    // console.log(tab);
    // setTag(tag);
  };

  useEffect(() => {
    const getTags = async () => {
      const response = await articleApi.getTags();
      setTags(response.data.tags);
    };

    getTags();
  }, []);

  useEffect(() => {
    getArticlesGlobal();
  }, [tag]);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  {user && (
                    <div
                      className={`nav-link tab ${tab === ArticleTab.FEED ? 'active' : ''}`}
                      onClick={getArticlesFeed}
                    >
                      Your Feed
                    </div>
                  )}
                </li>
                <li className="nav-item">
                  <div
                    className={`nav-link tab ${tab === ArticleTab.GLOBAL ? 'active' : ''}`}
                    onClick={getArticlesGlobal}
                  >
                    Global Feed
                  </div>
                </li>
                {tag && (
                  <li className="nav-item">
                    <div className={`nav-link tab ${tab === ArticleTab.TAG ? 'active' : ''}`}>
                      {tag}
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <>
              {loading ? (
                <div style={{ marginTop: '10px' }}>Loading articles...</div>
              ) : (
                <>
                  {articles.length === 0 ? (
                    <div style={{ marginTop: '10px' }}>No articles are here... yet.</div>
                  ) : (
                    <>
                      {articles.map((article) => (
                        <ArticlePreview key={article.slug} article={article} />
                      ))}
                    </>
                  )}
                </>
              )}
            </>
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                {tags.map((tag: string, index) => (
                  <Tag key={index} tag={tag} handleTagClicked={handleTagClicked} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
