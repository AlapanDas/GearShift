import Cookies from "js-cookie";
import React from "react";
import { deleteUser } from "../../user/userconfig";
import { useDispatch } from "react-redux";

function Logout() {
  const dispatch = useDispatch();
  function logout() {
    Cookies.remove('user_data');
    dispatch(deleteUser());
    window.location.href = "/";
  }
  return (
    <div className="flex  flex-1 flex-col  px-4  py-12 my-4  lg:px-8 rounded-2xl mx-5 mb-5 max-sm:mx-7 bg-onprimary dark:bg-black">
      <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-secondary">Your Account</h3>
      <div className="mt-10  sm:w-full sm:max-w-sm ">
        <form className="space-y-6 " method="POST">
          <div className="bg-btncol rounded-lg flex">
            <button
              onClick={logout}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-secondary dark:bg-primary "
            >
              Log out
            </button>
          </div>
          <div className="bg-btncol rounded-lg flex">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-secondary dark:bg-primary "
            >
              Delete Account
            </button>
          </div>
        </form>


      </div>
    </div>
  )
}

export default Logout;