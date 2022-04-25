import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DownArrow from '../../constants/icons/DownArrow';
import './form.scss';

function Form() {
  const [inIndex, setInIndex] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/register') setInIndex(false);
    else setInIndex(true);
  }, [location]);
  return (
    <div className="form-wrapper">
      <div className="form-header">
        <h1>{inIndex ? 'Giriş Yap' : 'Üye Ol'}</h1>
        <div className="form-header-desc">
          Fırsatlardan yararlanmak için
          {inIndex ? ' giriş yap' : ' üye ol'}
        </div>

        <form>
          <div>
            <label htmlFor="email">
              E-posta
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email@example.com"
                autoComplete={inIndex ? 'on' : 'off'}
              />
              {inIndex && <DownArrow />}
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Şifre
              <input
                type="password"
                id="password"
                name="password"
                placeholder="......"
                autoComplete="off"
              />
            </label>
          </div>
          <p className="forgotten-password">
            {inIndex && <a href="/login#">Şifremi Unuttum</a>}
          </p>
          <button type="button" className="login-register-btn">{inIndex ? 'Giriş Yap' : 'Üye Ol'}</button>
          <div className="account-query">
            {inIndex ? (
              <>
                Hesabın yok mu?
                <Link to="/register"><span> Üye Ol</span></Link>
              </>
            ) : (
              <>
                Hesabın var mı?
                <Link to="/login"><span> Giriş Yap</span></Link>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
