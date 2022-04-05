import React from 'react';

const FavoriteArticle = () => {
  return (
    <button className="btn btn-sm btn-outline-primary">
      <i className="ion-heart"></i>
      &nbsp; Favorite article <span className="counter">(29)</span>
    </button>
  );
};

export default FavoriteArticle;
