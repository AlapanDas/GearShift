import { useSelector } from "react-redux";
import React from "react";


function UserInfo() {
  const user = useSelector((state) => state.user);
  
  return (
    <div className="py-20 px-4 my-4 rounded-2xl mx-5 max-sm:mx-7 bg-onprimary dark:bg-darkbg ">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">User Information</h3>
      </div>
      <div className="mt-6 border-t border-gray-100 dark:text-white">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">{user.fullname}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">{user.email}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Contact Number</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">{user.number}</dd>
          </div>
        </dl>
      </div>
    </div>

  )
}

export default UserInfo;