import { useAppDispatch } from 'app/hooks';
import { useErrors } from 'common/hooks/useErrors';
import { selectUser } from 'features/auth/authSlice';
import { NewArticle, SingleArticleResponse, UpdateArticle } from 'features/home/articleModel';
import { selectArticleErrors } from 'features/home/slices/article-detail/articleDetailSlice';
import articleDetailThunk from 'features/home/slices/article-detail/articleDetailThunk';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Editor = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const user = useSelector(selectUser);

  const articleError = useSelector(selectArticleErrors);
  const error = useErrors(articleError);

  const { register, handleSubmit, reset, setValue } = useForm<NewArticle>();

  const onSubmit = async (data: NewArticle) => {
    let response = {} as SingleArticleResponse;
    if (slug) {
      const updateArticle: UpdateArticle = {
        body: data.body,
        description: data.description,
        title: data.title
      };
      response = await dispatch(articleDetailThunk.updateArticle({ slug, updateArticle })).unwrap();
    } else {
      response = await dispatch(articleDetailThunk.createArticle(data)).unwrap();
    }
    reset();
    navigate(`/article/${response.article.slug}`);
  };

  useEffect(() => {
    const getArticle = async () => {
      if (slug) {
        const data = await dispatch(articleDetailThunk.getArticle(slug)).unwrap();
        if (user && data.article.author.username === user.username) {
          setValue('title', data.article.title);
          setValue('body', data.article.body);
          setValue('description', data.article.description);
        } else {
          navigate('/');
        }
      }
    };

    getArticle();
  }, []);

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            {error && (
              <ul className="error-messages">
                <li>{error}</li>
              </ul>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    {...register('title')}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    {...register('description')}
                    type="text"
                    className="form-control"
                    placeholder="What's this article about?"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    {...register('body')}
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                  ></textarea>
                </fieldset>
                {/* <fieldset className="form-group">
                  <input
                    onKeyUp={(e) => handleEnterTags}
                    type="text"
                    className="form-control"
                    placeholder="Enter tags"
                  />
                  <div className="tag-list">
                    <span className="tag-default tag-pill">
                      <i className="ion-close-round"></i>hf
                    </span>
                    <span className="tag-default tag-pill">
                      <i className="ion-close-round"></i>hf
                    </span>
                    <span className="tag-default tag-pill">
                      <i className="ion-close-round"></i>hf
                    </span>
                  </div>
                </fieldset> */}

                <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
