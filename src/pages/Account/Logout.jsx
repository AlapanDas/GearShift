import Cookies from "js-cookie";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../user/userconfig";
import user_img from "../../assets/images/user_profile.png";
import { useNavigate } from "react-router-dom";
import ConfirmPopUp from "../../components/ConfirmPopUp";


function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showpopup, setShowpopup] = useState(false);
  const [opt, setOpt] = useState("");

  function deleteuser() {
    const secret = Cookies.get('user_data');
    fetch('https://gearshift-backend.onrender.com/user/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: secret.replace(/"/g, ''),
      }),
      credentials: 'include',
    }).then(window.location.href = '/');
  }

  function logout() {
    try {
      dispatch(deleteUser());
      Cookies.remove('user_data');
      navigate("/", { state: { msg: "Logged out" } })
    }
    catch {
      console.log("Something wrong")
    }
  }

  const confLogout = () => {
    setOpt("Logout")
    setShowpopup(!showpopup)
  }

  const confDelete = ()=>{
    setOpt("Delete")
    setShowpopup(!showpopup)
  }

  return (
    <>
      <div className="flex  flex-1 flex-col  px-4  py-12 my-4  lg:px-8 rounded-2xl mx-5 mb-5 max-sm:mx-7 bg-onprimary dark:bg-darkbg">
        <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">Your Account</h3>
        <div className="mt-10  sm:w-full sm:max-w-sm  flex justify-between  ">
          <div className="space-y-6 ">
            <div className="bg-btncol rounded-lg flex ">
              <button
                onClick={confLogout}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-white dark:bg-darkbgbtn "
              >
                Log out
              </button>
            </div>
            <div className="bg-btncol rounded-lg flex">
              <button
                onClick={confDelete}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-white dark:bg-darkbgbtn "
              >
                Delete Account
              </button>
            </div>
          </div>
          <div>
            <img src={user_img} className="rounded-md size-24 max-sm:size-16" alt=" user_profile" />
          </div>


        </div>
      </div>
      {showpopup && <ConfirmPopUp confLogout={confLogout} logout={logout} deleteuser={deleteuser} text={{
        type : opt,
        title : `Are You Sure to ${opt}?`
      }}/>}
    </>
  )
}

export default Logout;