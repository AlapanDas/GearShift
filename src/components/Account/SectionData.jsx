import React from "react";
import UserInfo from "./UserInfo";
import UserAddress from "./UserAddress";
import Logout from "./Logout";
import ChangePassword from "./ChangePassword";
import Orders from "./Orders";
//import { PaperClipIcon } from '@heroicons/react/20/solid' 

function SectionData() {
  return (
    <div>
    <UserInfo/>
    <UserAddress/>
    <Orders/>
    <ChangePassword/>
    <Logout/>
    
  
    </div>
    
  )
}


export default SectionData;