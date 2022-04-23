import React from 'react'
import './Login.scss'
import  bannerLoginRegister  from '../../constants/images/bannerLoginRegister.webp'
import useWindowSize from '../../hooks/useWindowSize'
import Logo from '../../constants/icons/Logo';

function Login() {
    const [width, height] = useWindowSize();
  return (
    <main className='login-register-main'>
        <figure className='login-register-banner'width={width*0.434}>
            <img src={bannerLoginRegister}  alt="banner" />
        </figure>
        <section className='login-register-area'>
            <div className="login-register-logo">
                {/* Link gelecek */}
                    <Logo />
               
            </div>
            {/* <Form /> */}
        </section>
    </main>
  )
}

export default Login