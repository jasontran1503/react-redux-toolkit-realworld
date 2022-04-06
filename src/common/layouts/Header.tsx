import { useGetCurrentUser } from 'common/hooks/useGetCurrentUser';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const user = useGetCurrentUser();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {user && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="editor">
                  <i className="ion-compose"></i>&nbsp;New Article
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="settings">
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="profile">
                  <img src={user.image} alt="" className="user-pic" />
                  {user.username}
                </Link>
              </li>
            </>
          )}
          {!user && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="auth/login">
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="auth/register">
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
