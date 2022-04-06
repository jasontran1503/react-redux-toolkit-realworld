import { useAppDispatch } from 'app/hooks';
import { useCheckAuth } from 'common/hooks/useCheckAuth';
import { removeLocalStorage } from 'common/logic/storage';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UpdateUser } from '../authModel';
import { authActions } from '../authSlice';
import authThunk from '../authThunk';

const Settings = () => {
  const user = useCheckAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const defaultValues = user
    ? { email: user.email, username: user.username, bio: user.bio, image: user.image }
    : {};

  const { register, handleSubmit, reset } = useForm<UpdateUser>({ defaultValues });
  const onSubmit = async (data: UpdateUser) => {
    await dispatch(authThunk.updateCurrentUser(data)).unwrap();
    reset();
    // navigate('/');
  };

  const logout = () => {
    removeLocalStorage('api_token');
    dispatch(authActions.logout());
    navigate('/');
  };

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    {...register('image')}
                    className="form-control"
                    type="text"
                    placeholder="URL of profile picture"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    {...register('username')}
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    {...register('bio')}
                    className="form-control form-control-lg"
                    rows={8}
                    placeholder="Short bio about you"
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    {...register('email')}
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    {...register('password')}
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                  />
                </fieldset>
                <button type="button" className="btn btn-lg btn-primary pull-xs-right">
                  Update Settings
                </button>
              </fieldset>
              <hr />
              <button className="btn btn-outline-danger" onClick={logout}>
                Or click here to logout.
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
