import Cookies from "js-cookie";
import React from "react";

import { deleteUser } from "../../user/userconfig";
import user_img from "../../assets/images/user_profile.png";


function Logout() {
  function logout() {
    Cookies.remove('user_data');
    deleteUser();
    window.location.href="/";
  }
  return (
    <div className="flex  flex-1 flex-col  px-4  py-12 my-4  lg:px-8 rounded-2xl mx-5 mb-5 max-sm:mx-7 bg-onprimary dark:bg-darkbg">
      <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">Your Account</h3>
      <div className="mt-10  sm:w-full sm:max-w-sm  flex justify-between  ">
        <form className="space-y-6 "  method="POST">
          <div className="bg-btncol rounded-lg flex ">
            <button
            onClick={logout}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-white dark:bg-darkbgbtn "
            >
              Log out
            </button>
          </div>
          <div className="bg-btncol rounded-lg flex">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-white dark:bg-darkbgbtn "
            >
              Delete Account
            </button>
          </div>
        </form>
         <div>
        <img src={user_img} className="rounded-md size-24 max-sm:size-16"  alt=" user_profile"/>
        </div>


      </div>
    </div>
  )
}

export default Logout;