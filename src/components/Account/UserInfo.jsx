import React from "react";

function UserInfo(){
    return (
        <div className="py-20 px-4 my-4 rounded-2xl dark:bg-black">
         <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-secondary">User Information</h3>
         </div>
      <div className="mt-6 border-t border-gray-100 dark:text-white">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-secondary">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-secondary">Margot Foster</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-secondary">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-secondary">margotfoster@example.com</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-secondary">Contact Number</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-secondary">97634218</dd>
          </div>
        </dl>
      </div>
    </div>

    )
}

export default UserInfo;