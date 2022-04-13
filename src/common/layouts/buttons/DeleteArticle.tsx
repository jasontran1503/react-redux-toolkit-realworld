import { useAppDispatch } from 'app/hooks';
import articleDetailThunk from 'features/home/slices/article-detail/articleDetailThunk';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteArticle = ({ slug }: { slug: string }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDeleteArticle = async () => {
    await dispatch(articleDetailThunk.deleteArticle(slug)).unwrap();
    navigate('/');
  };

  return (
    <button className="btn btn-sm btn-outline-danger" onClick={handleDeleteArticle}>
      <i className="ion-trash-a"></i>
      &nbsp; Delete Article
    </button>
  );
};

export default DeleteArticle;
