import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { setUser } from '../user/userconfig'


export default function Login() {
     const [setlogin, updatelogin] = useState(false)
     const [showPasswordSignIn, setShowPasswordSignIn] = useState(false);
     const [showPasswordSignUp, setShowPasswordSignUp] = useState(false);
     const showSignInPassword = () => {
          setShowPasswordSignIn(!showPasswordSignIn);
     }
     const showSignUpPassword = () => {
          setShowPasswordSignUp(!showPasswordSignUp);
     }
     async function login() {
          const username = document.getElementById('name-login').value;
          const password = document.getElementById('password-login').value;

          fetch('https://gearshift-backend.onrender.com/user/login', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                    username: username,
                    password: password,
               }),
               credentials: 'include',
          })
               .then((response) => response.json())
               .then((data) => {

                    let user_data = data.user;

                    if (data.status)
                         updatelogin(true);
                    setUser(user_data);

                    Cookies.set('user_data', JSON.stringify(user_data), { expires: 2 });
                    window.location.href="/";
               })
               .catch((error) => {
                    updatelogin(false);
                    console.error('Error:', error)
               });


     }
     return (
          <>
               <div className="flex flex-col md:flex-row justify-center bg-onprimary dark:bg-primary">
                    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                         <div className="sm:mx-auto sm:w-full sm:max-w-md">
                              <h2 className="mt-6 text-center text-3xl font-bold text-notif dark:text-onprimary">
                                   Log In
                              </h2>
                         </div>
                         <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-md">
                              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 dark:bg-primary dark:shadow-onprimary dark:shadow-lg">
                                   <div className="space-y-5">
                                        <div>
                                             <label id="username" className="block text-sm font-medium text-primary dark:text-onprimary">
                                                  Username
                                             </label>
                                             <div className="mt-1">
                                                  <input id="name-login" name="name" type='text' autoComplete="name" required
                                                       className="appearance-none rounded-md relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-primary dark:text-onprimary focus:outline-notif focus:ring-notif focus:border-notif focus:z-10 sm:text-sm dark:bg-primary dark:border-onprimary"
                                                       placeholder="Enter your username" />
                                             </div>
                                        </div>
                                        <div>
                                             <label id="password" className="block text-sm font-medium text-primary dark:text-onprimary">
                                                  Password
                                             </label>
                                             <div className="mt-1 relative">
                                                  <input id="password-login" name="password" type={!showPasswordSignUp ? "password" : "text"} autoComplete="current-password" required
                                                       className="appearance-none rounded-md relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-primary dark:text-onprimary focus:outline-notif focus:ring-notif focus:border-notif sm:text-sm dark:bg-primary dark:border-onprimary"
                                                       placeholder="Enter your password" />
                                                  {!showPasswordSignUp ? <FontAwesomeIcon icon={faEyeSlash} className='absolute right-3 top-3 dark:text-white hover:cursor-pointer' onClick={showSignUpPassword}></FontAwesomeIcon> : <FontAwesomeIcon icon={faEye} className='absolute right-3 top-3 dark:text-white hover:cursor-pointer' onClick={showSignUpPassword}></FontAwesomeIcon>}
                                             </div>
                                        </div>
                                        <div>
                                             <button type="submit" onClick={login}
                                                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-notif dark:bg-onprimary dark:text-primary hover:shadow-lg dark:hover:bg-notif dark:hover:text-white">
                                                  Log In
                                             </button>
                                        </div>
                                   </div>
                                   <div className="mt-4">
                                        <div className="relative dark:text-white">
                                             <hr />
                                             <div className="relative flex justify-center text-sm mt-1">
                                                  <span className="px-2 text-primary dark:text-white">
                                                       Or continue with
                                                  </span>
                                             </div>
                                        </div>
                                        <div className="mt-6 grid grid-cols-3 gap-3">
                                             <div>
                                                  <a href="/#"
                                                       className="w-full flex items-center justify-center px-8 py-3 border border-primary rounded-md shadow-sm text-sm font-medium text-primary bg-white hover:bg-onprimary">
                                                       <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                                                            alt="facebook" />
                                                  </a>
                                             </div>
                                             <div>
                                                  <a href="/#"
                                                       className="w-full flex items-center justify-center px-8 py-3 border border-primary rounded-md shadow-sm text-sm font-medium text-primary bg-white hover:bg-onprimary">
                                                       <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                                                            alt="twitter" />
                                                  </a>
                                             </div>
                                             <div>
                                                  <a href="/#"
                                                       className="w-full flex items-center justify-center px-8 py-3 border border-primary rounded-md shadow-sm text-sm font-medium text-primary bg-white hover:bg-onprimary">
                                                       <img className="h-5 w-5" src="https://www.svgrepo.com/show/506498/google.svg"
                                                            alt="google" />
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}
