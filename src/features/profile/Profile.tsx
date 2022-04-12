// import ArticlePreview from 'features/home/components/ArticlePreview';
import React from 'react';

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src="http://i.imgur.com/Qr71crq.jpg" className="user-img" alt="" />
              <h4>Eric Simons</h4>
              <p>
                Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta
                from the Hunger Games
              </p>
              <button className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-plus-round"></i>
                &nbsp; Follow Eric Simons <span className="counter">(10)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <div className="nav-link active">
                    My Articles
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    Favorited Articles
                  </div>
                </li>
              </ul>
            </div>

            {/* <ArticlePreview />

            <ArticlePreview /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
