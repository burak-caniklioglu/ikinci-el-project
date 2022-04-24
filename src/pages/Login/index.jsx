import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import bannerLoginRegister from "../../constants/images/bannerLoginRegister.webp";
import useWindowSize from "../../hooks/useWindowSize";
import Logo from "../../constants/icons/Logo";
import Form from "../../components/Form";

function Login() {
  const [width] = useWindowSize();
  return (
    <main className="login-register-main">
      <figure className="login-register-banner" width={width * 0.434}>
        <img src={bannerLoginRegister} alt="banner" />
      </figure>
      <section className="login-register-area">
        <div className="login-register-logo">
          <Link to="/">
            <Logo size={width < 768 && 144} />
          </Link>
        </div>

        <Form />
      </section>
    </main>
  );
}

export default Login;
