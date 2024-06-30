import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AccountPage from './AccountPage';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import Cookies from 'js-cookie';
import { setUser } from '../user/userconfig'
import { Link } from 'react-router-dom';




function LoginSignup() {
  const user = useSelector((state) => state.user);
  const [setlogin, updatelogin] = useState(false);
  let userObject;
  useEffect(() => {
    const userCookie = Cookies.get('user_data');
    // Searches for Cookie
    if (userCookie) {
      userObject = JSON.parse(userCookie);
      setUser(userObject);
      updatelogin(true);
    } else {
      // Cookie not Found then searches for Redux Info
      if (user.isLoggedIn)
        updatelogin(true)
      else
        //Cookie, Redux not found 
        updatelogin(false);
    }
  }, []);

  return (
    <>
      {setlogin ?
        // SignUp Page
        <AccountPage />
        :
        <div>
          {user.isLoggedIn ?
            <SignUp />
            :
            <Login />}
        </div>
      }
      <div className="text-center text-lg py-1 text-primary dark:text-onprimary mx-auto md:flex-row justify-center bg-onprimary dark:bg-primary">Don't have an account? <Link to="/signup" className=' font-semibold text-notif dark:text-onprimary'>Create One !!</Link></div>
    </>
  )
}

export default LoginSignup;