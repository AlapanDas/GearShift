import React, { useEffect, useState } from "react";
import UserInfo from "./UserInfo";
import UserAddress from "./UserAddress";
import Logout from "./Logout";
import ChangePassword from "./ChangePassword";
import Orders from "./Orders";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

function SectionData() {
  const [update,setUpdate] = useState(false)
  const location = useLocation()
  const notification = (msg)=>{
    setUpdate(!update)
    toast.success(msg)
  }

  // useEffect(() => {
  //   if (location.state!==null && location.state.msg) {
  //     toast.success(location.state.msg);
      
  //   }
  //   console.log("rendering")
  // }, [location.pathname]);

  // if(location.state!== null){
  //   toast.success(location.state.msg)
  // }
  return (
    <div className='py-4 dark:bg-black'>
      <Logout />
      <UserInfo />
      <UserAddress notification={notification}/>
      <Orders />
      <ChangePassword />
    </div>

  )
}


export default SectionData;