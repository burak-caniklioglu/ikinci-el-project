import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import formSchema from '../../constants/formSchema/formShema';
// import toastify from '../../helper funcs/toastify';
import DownArrow from '../../constants/icons/DownArrow';
import './form.scss';

import axios from '../../api/axios';

function Form() {
  const [inIndex, setInIndex] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/register') setInIndex(false);
    else setInIndex(true);
  }, [location]);
  const REGİSTER_URL = '/auth/local/register';
  const submitHandler = async (values) => {
    try {
      const response = await axios.post(REGİSTER_URL, {
        username: values.email,
        email: values.email,
        password: values.password,
      });
      navigate('/');
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleOnChange = (e) => {
  // };

  return (
    <div className="form-wrapper">
      <div className="form-header">
        <h1>{inIndex ? 'Giriş Yap' : 'Üye Ol'}</h1>
        <div className="form-header-desc">
          Fırsatlardan yararlanmak için
          {inIndex ? ' giriş yap' : ' üye ol'}
        </div>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => {
            submitHandler(values);
          }}
          validationSchema={formSchema}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            // errors,
            handleBlur,
            // touched,
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">
                  E-posta
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email@example.com"
                    autoComplete={inIndex ? 'on' : 'off'}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
              </div>
              <p className="forgotten-password">
                {inIndex && <a href="/login#">Şifremi Unuttum</a>}
              </p>
              <button type="submit" className="login-register-btn">
                {inIndex ? 'Giriş Yap' : 'Üye Ol'}
              </button>
              <div className="account-query">
                {inIndex ? (
                  <>
                    Hesabın yok mu?
                    <Link to="/register">
                      <span> Üye Ol</span>
                    </Link>
                  </>
                ) : (
                  <>
                    Hesabın var mı?
                    <Link to="/login">
                      <span> Giriş Yap</span>
                    </Link>
                  </>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Form;
