import React from 'react';

const ArticleInfo = () => {
  return (
    <>
      <a href="profile.html">
        <img src="http://i.imgur.com/N4VcUeJ.jpg" alt="" />
      </a>
      <div className="info">
        <a href="profile.html" className="author">
          Albert Pai
        </a>
        <span className="date">January 20th</span>
      </div>
    </>
  );
};

export default ArticleInfo;
