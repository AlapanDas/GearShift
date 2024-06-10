import React from "react";
import UserInfo from "./UserInfo";
import UserAddress from "./UserAddress";
import Logout from "./Logout";
import ChangePassword from "./ChangePassword";
import Orders from "./Orders";

function SectionData() {
  return (
    <div >
      <Logout />
      <UserInfo />
      <UserAddress />
      <Orders />
      <ChangePassword />
    </div>

  )
}


export default SectionData;