import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "../assets/styles/loginSignup.css";

function LoginSignup() {

  const signupWindow = ()=>{
    const container = document.getElementById('container');
    container.classList.add("right-panel-active");
  }
  const signinWindow = ()=>{
    const container = document.getElementById('container');
    container.classList.remove("right-panel-active");
  }

  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><FontAwesomeIcon icon={faGoogle} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social"><FontAwesomeIcon icon={faGoogle} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className='not-account'>Welcome Back!</h1>
              <p className='not-account'>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={signinWindow}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className='not-account'>Not have an Account?</h1>
              <p className='not-account'>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={signupWindow}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginSignup;