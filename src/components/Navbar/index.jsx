import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import './navbar.scss';
import Logo from '../../constants/icons/Logo';
import Plus from '../../constants/icons/Plus';
import Login from '../../constants/icons/Login';
import useWindowSize from '../../hooks/useWindowSize';

function Navbar() {
  const [width] = useWindowSize();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAuth = Cookies.get('token');
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <Link to="/">
            <Logo size={width < 768 ? 99.33 : 128.94} />
          </Link>
        </div>
        <div className="nav-btns">
          {isAuth && isHome && (
          <Link to="/addproduct">
            <button type="button" className="nav-btn btn-add-product">
              <Plus />
              {' '}
              {width > 576 && 'Ürün Ekle'}
              {' '}

            </button>
          </Link>
          )}
          {isAuth ? (
            <Link to="/myaccount">
              <button type="button" className="nav-btn btn-add-product">
                <Login />
                Hesabım
              </button>
            </Link>
          )
            : (
              <Link to="/login">
                <button
                  type="button"
                  className="nav-btn btn-login"
                >
                  <Login />
                  {' '}
                  Giriş Yap
                </button>
              </Link>
            )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
