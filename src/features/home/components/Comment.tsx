import React from 'react';

const Comment = () => {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
      <div className="card-footer">
        <a href="profile.html" className="comment-author">
          <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" alt="" />
        </a>
        &nbsp;
        <a href="profile.html" className="comment-author">
          Jacob Schmidt
        </a>
        <span className="date-posted">Dec 29th</span>
        <span className="mod-options">
          <i className="ion-trash-a"></i>
        </span>
      </div>
    </div>
  );
};

export default Comment;
