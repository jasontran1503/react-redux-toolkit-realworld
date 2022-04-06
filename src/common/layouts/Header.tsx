import { useCheckAuth } from 'common/hooks/useCheckAuth';
import { selectLoading } from 'features/auth/authSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from './Loading';

const Header = () => {
  const user = useCheckAuth();
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {/* {isLoading ? (
        <Loading />
      ) : ( */}
        <nav className="navbar navbar-light">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              conduit
            </a>
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
                      <img src="http://i.imgur.com/N4VcUeJ.jpg" alt="" className="user-pic" />
                      son.son
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
      )
      {/* } */}
    </>
  );
};

export default Header;
