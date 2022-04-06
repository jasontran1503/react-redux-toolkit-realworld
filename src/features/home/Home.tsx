import { selectUser } from 'features/auth/authSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import ArticleDetail from './components/ArticleDetail';
import ArticlePreview from './components/ArticlePreview';
import Tag from './components/Tag';
import './Home.css';

const Home = () => {
  const user = useSelector(selectUser);

  return (
    // <ArticleDetail />
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
                  {user && <div className="nav-link tab">Your Feed</div>}
                </li>
                <li className="nav-item">
                  <div className="nav-link tab active">Global Feed</div>
                </li>
              </ul>
            </div>

            <ArticlePreview />

            <ArticlePreview />
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <Tag />
                <Tag />
                <Tag />
                <Tag />
                <Tag />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
