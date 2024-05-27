import React from 'react';

function LoginSignup() {

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center bg-onprimary dark:bg-primary">
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-bold text-notif dark:text-onprimary">
              Sign In
            </h2>
            {/* <p className="mt-1 text-center text-sm max-w">
              Or<br/> 
              <a href="#" className="font-medium text-primary hover:text-notif">
                create an account
              </a>
            </p> */}
          </div>

          <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white dark:bg-primary dark:shadow-onprimary dark:shadow-2xl py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-5">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-primary dark:text-onprimary">
                    Username
                  </label>
                  <div className="mt-1">
                    <input id="name-signin" name="name" type='text' autoComplete="name" required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-onprimary focus:outline-notif focus:ring-notif focus:border-notif focus:z-10 sm:text-sm dark:bg-primary dark:border-onprimary"
                      placeholder="Enter your username" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary dark:text-onprimary">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input id="email-signin" name="email" type="email" autoComplete="email" required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-onprimary focus:outline-notif focus:ring-notif focus:border-notif focus:z-10 sm:text-sm dark:bg-primary dark:border-onprimary"
                      placeholder="Enter your email address" />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-primary dark:text-onprimary">
                    Password
                  </label>
                  <div className="mt-1">
                    <input id="password-signin" name="password" type="password" autoComplete="current-password" required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-onprimary focus:outline-notif focus:ring-notif focus:border-notif focus:z-10 sm:text-sm dark:bg-primary dark:border-onprimary"
                      placeholder="Enter your password" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input id="remember_me" name="remember_me" type="checkbox"
                      className="h-4 w-4 text-notif focus:ring-notif border-primary rounded" />
                    <label htmlFor="remember_me" className="ml-2 block text-sm text-notif dark:text-secondary">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-alert dark:text-onprimary">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-notif dark:bg-onprimary dark:text-primary hover:shadow-lg">
                    Sign in
                  </button>
                </div>
              </form>
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
                    <a href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-primary rounded-md shadow-sm text-sm font-medium text-primary bg-white hover:bg-onprimary">
                      <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                        alt="facebook" />
                    </a>
                  </div>
                  <div>
                    <a href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-primary rounded-md shadow-sm text-sm font-medium text-primary bg-white hover:bg-onprimary">
                      <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                        alt="twitter" />
                    </a>
                  </div>
                  <div>
                    <a href="#"
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
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-bold text-notif dark:text-onprimary">
              Sign Up
            </h2>
            {/* <p className="mt-1 text-center text-sm max-w">
              Or<br/> 
              <a href="#" className="font-medium text-primary hover:text-notif">
                create an account
              </a>
            </p> */}
          </div>

          <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 dark:bg-primary dark:shadow-onprimary dark:shadow-2xl">
              <form className="space-y-5">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-primary dark:text-onprimary">
                    Username
                  </label>
                  <div className="mt-1">
                    <input id="name-signup" name="name" type='text' autoComplete="name" required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-onprimary focus:outline-notif focus:ring-notif focus:border-notif focus:z-10 sm:text-sm dark:bg-primary dark:border-onprimary"
                      placeholder="Enter your username" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary dark:text-onprimary">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input id="email-signup" name="email" type="email" autoComplete="email" required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-onprimary focus:outline-notif focus:ring-notif focus:border-notif focus:z-10 sm:text-sm dark:bg-primary dark:border-onprimary"
                      placeholder="Enter your email address" />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-primary dark:text-onprimary">
                    Password
                  </label>
                  <div className="mt-1">
                    <input id="password-signup" name="password" type="password" autoComplete="current-password" required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-onprimary focus:outline-notif focus:ring-notif focus:border-notif focus:z-10 sm:text-sm dark:bg-primary dark:border-onprimary"
                      placeholder="Enter your password" />
                  </div>
                </div>

                <div>
                  <button type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-notif dark:bg-onprimary dark:text-primary hover:shadow-lg">
                    Sign Up
                  </button>
                </div>
              </form>
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
                    <a href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-primary rounded-md shadow-sm text-sm font-medium text-primary bg-white hover:bg-onprimary">
                      <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                        alt="facebook" />
                    </a>
                  </div>
                  <div>
                    <a href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-primary rounded-md shadow-sm text-sm font-medium text-primary bg-white hover:bg-onprimary">
                      <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                        alt="twitter" />
                    </a>
                  </div>
                  <div>
                    <a href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-primary rounded-md shadow-sm text-sm font-medium text-primary bg-white hover:bg-onprimary">
                      <img className="h-5 w-5" src="https://www.svgrepo.com/show/506498/google.svg"
                        alt="google" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></div>

    </>
  )
}

export default LoginSignup;