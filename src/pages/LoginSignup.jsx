import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountPage from './AccountPage';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import Cookies from 'js-cookie';
import { setUser } from '../user/userconfig'




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
      <a href="/signin"><div className="text-center py-1 text-primary dark:text-onprimary mx-auto md:flex-row justify-center bg-onprimary dark:bg-primary">Don't have an account? Create One !!</div></a>
    </>
  )
}

export default LoginSignup;