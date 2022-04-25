import React from 'react';
import { Link } from 'react-router-dom';
import './form.scss';

function Form() {
  return (
    <div className="form-wrapper">
      <div className="form-header">
        <h1>Giriş Yap</h1>
        <div className="form-header-desc">
          Fırsatlardan yararlanmak için giriş yap
        </div>

        <form>
          <div>
            <label htmlFor="email">
              E-posta
              <input type="email" id="email" name="email" placeholder="Email@example.com" />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Şifre
              <input type="password" id="password" name="password" placeholder="......" />
            </label>
          </div>
          <p className="forgotten-password">
            <a href="/login#">Şifremi Unuttum</a>
          </p>
          <button type="button" className="login-register-btn">Giriş Yap</button>
          <div className="account-query">
            Hesabın yok mu?
            {' '}
            <Link to="/register">
              <span>Üye Ol</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
