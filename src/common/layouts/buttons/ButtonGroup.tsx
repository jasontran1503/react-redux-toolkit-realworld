import { selectUser } from 'features/auth/authSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import DeleteArticle from './DeleteArticle';
import EditArticle from './EditArticle';
import FavoriteArticle from './FavoriteArticle';
import FollowUser from './FollowUser';

function ButtonGroup({ username }: { username: string }) {
  const user = useSelector(selectUser);
  return (
    <>
      {user?.username !== username ? (
        <>
          <FollowUser />
          &nbsp;&nbsp;
          <FavoriteArticle />
        </>
      ) : (
        <>
          <EditArticle />
          &nbsp;&nbsp;
          <DeleteArticle />
        </>
      )}
    </>
  );
}

export default ButtonGroup;
