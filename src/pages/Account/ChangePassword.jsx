import React from "react";

function ChangePassword(){
    return(
        <div className="flex  flex-1 flex-col  px-4 my-4  py-12 lg:px-8 rounded-2xl mx-5 max-sm:mx-7 bg-onprimary dark:bg-darkbg">
            <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">Change Password</h3>
        <div className="mt-10  sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                  Password
                </label>
                <div className="text-sm">
                  <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-white">
                    Forgot password?
                  </a>
                </div>
              </div>
              
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              
            </div>

            <div>
              <div className="flex items-center justify-between ">
                <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white  ">
                  Confirm Password
                </label>
                
              </div>
              
              <div className="mt-2">
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
</div>

            <div className=" border-slate-700 bg-btncol rounded-lg">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6  text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-white dark:bg-darkbgbtn"
              >
                Change Password
              </button>
            </div>
          </form>

        
        </div>
      </div>
    )
}

export default ChangePassword;
