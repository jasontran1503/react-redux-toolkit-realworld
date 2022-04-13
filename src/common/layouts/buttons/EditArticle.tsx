import { useAppDispatch } from 'app/hooks';
import { articleDetailActions } from 'features/home/slices/article-detail/articleDetailSlice';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditArticle = ({ slug }: { slug: string }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateEdit = () => {
    dispatch(articleDetailActions.clearErrors());
    navigate(`/editor/${slug}`);
  };

  return (
    <button className="btn btn-sm btn-outline-secondary" onClick={navigateEdit}>
      <i className="ion-edit"></i>
      &nbsp;Edit Article <span className="counter"></span>
    </button>
  );
};

export default EditArticle;
