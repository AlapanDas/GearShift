import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { setUser } from '../user/userconfig'


export default function SignUp() {
     const [setlogin, updatelogin] = useState(false)
     const [showPasswordSignIn, setShowPasswordSignIn] = useState(false);
     const showSignInPassword = () => {
          setShowPasswordSignIn(!showPasswordSignIn);
     }
     async function signup() {
          const username = document.getElementById('name-signin').value;
          const password = document.getElementById('password-signin').value;
          const email = document.getElementById('email-signin').value;
          fetch('https://gearshift-backend.onrender.com/user/signin', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
               }),
               credentials: 'include',
          })
               .then((response) => response.json())
               .then((data) => {

                    let user_data = data.user;
                    if (data.status)
                         updatelogin(true);
                    setUser(user_data);

                    Cookies.set('user_data', user_data, { expires: 2 });
                    window.location.href = '/'
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
                                   Sign In
                              </h2>
                         </div>

                         <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-md">
                              <div className="bg-white dark:bg-primary dark:shadow-onprimary dark:shadow-lg py-8 px-4 shadow sm:rounded-lg sm:px-10">
                                   <div className="space-y-5" method='POST'>
                                        <div>
                                             <label id="username-login" className="block text-sm font-medium text-primary dark:text-onprimary">
                                                  Username
                                             </label>
                                             <div className="mt-1">
                                                  <input id="name-signin" name="name" type='text' autoComplete="name" required
                                                       className="appearance-none rounded-md relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-primary dark:text-onprimary focus:outline-notif focus:ring-notif focus:border-notif sm:text-sm dark:bg-primary dark:border-onprimary"
                                                       placeholder="Enter your username" />
                                             </div>
                                        </div>
                                        <div>
                                             <label id="email" className="block text-sm font-medium text-primary dark:text-onprimary">
                                                  Email address
                                             </label>
                                             <div className="mt-1">
                                                  <input id="email-signin" name="email" type="email" autoComplete="email" required
                                                       className="appearance-none rounded-md relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-primary dark:text-onprimary focus:outline-notif focus:ring-notif focus:border-notif sm:text-sm dark:bg-primary dark:border-onprimary"
                                                       placeholder="Enter your email address" />
                                             </div>
                                        </div>

                                        <div>
                                             <label id="password-login" className="block text-sm font-medium text-primary dark:text-onprimary">
                                                  Password
                                             </label>
                                             <div className="mt-1 relative">
                                                  <input id="password-signin" name="password" type={!showPasswordSignIn ? "password" : "text"} autoComplete="current-password" required
                                                       className="appearance-none rounded-md relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-primary dark:text-onprimary focus:outline-notif focus:ring-notif focus:border-notif sm:text-sm dark:bg-primary dark:border-onprimary"
                                                       placeholder="Enter your password" />
                                                  {!showPasswordSignIn ? <FontAwesomeIcon icon={faEyeSlash} className='absolute right-3 top-3 dark:text-white hover:cursor-pointer' onClick={showSignInPassword}></FontAwesomeIcon> : <FontAwesomeIcon icon={faEye} className='absolute right-3 top-3 dark:text-white hover:cursor-pointer' onClick={showSignInPassword}></FontAwesomeIcon>}
                                             </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                             <div className="flex items-center">
                                                  <input id="remember_me" name="remember_me" type="checkbox"
                                                       className="h-4 w-4 text-notif focus:ring-notif border-primary rounded" />
                                                  <label id="remember_me" className="ml-2 block text-sm text-notif dark:text-secondary">
                                                       Remember me
                                                  </label>
                                             </div>

                                             {/* <div className="text-sm">
                    <a href="/#" className="font-medium text-alert dark:text-onprimary">
                      Forgot your password?
                    </a>
                  </div> */}
                                        </div>

                                        <div>
                                             <button type="submit" onClick={signup}
                                                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-notif dark:bg-onprimary dark:text-primary hover:shadow-lg dark:hover:bg-notif dark:hover:text-white">
                                                  Sign in
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
