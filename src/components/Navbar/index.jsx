import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import Logo from '../../constants/icons/Logo';
import Plus from '../../constants/icons/Plus';
import Login from '../../constants/icons/Login';
import useWindowSize from '../../hooks/useWindowSize';

function Navbar() {
  const [width] = useWindowSize();
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <Link to="/">
            <Logo size={width < 768 ? 99.33 : 128.94} />
          </Link>
        </div>
        <div className="nav-btns">
          <Link to="/addproduct">
            <button type="button" className="nav-btn btn-add-product">
              <Plus />
              {' '}
              {width > 576 && 'Ürün Ekle'}
              {' '}

            </button>
          </Link>
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
