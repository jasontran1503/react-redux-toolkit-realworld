import { selectUser } from 'features/auth/authSlice';
import { Article } from 'features/home/articleModel';
import React from 'react';
import { useSelector } from 'react-redux';
import DeleteArticle from './DeleteArticle';
import EditArticle from './EditArticle';
import FavoriteArticle from './FavoriteArticle';
import FollowUser from './FollowUser';

function ButtonGroup({ article }: { article: Article }) {
  const user = useSelector(selectUser);
  return (
    <>
      {user?.username !== article.author.username ? (
        <>
          <FollowUser />
          &nbsp;&nbsp;
          <FavoriteArticle />
        </>
      ) : (
        <>
          <EditArticle slug={article.slug} />
          &nbsp;&nbsp;
          <DeleteArticle slug={article.slug} />
        </>
      )}
    </>
  );
}

export default ButtonGroup;
