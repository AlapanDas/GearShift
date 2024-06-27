import React from "react";
import UserInfo from "./UserInfo";
import UserAddress from "./UserAddress";
import Logout from "./Logout";
import ChangePassword from "./ChangePassword";
import Orders from "./Orders";

function SectionData() {
  return (
    <div className='py-4 dark:bg-black'>
      <Logout />
      <UserInfo />
      <UserAddress />
      <Orders />
      <ChangePassword />
    </div>

  )
}


export default SectionData;