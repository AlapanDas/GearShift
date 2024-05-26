import React from "react";



function SectionList(){
    return (
        <div className="  flex flex-col min-w-80 ">
            <p className="py-4  rounded-sm ml-20 "> <a href="/"  >User Information</a></p> 
            <p className="py-4  rounded-sm ml-20"> <a href="/"  >Address</a></p> 
            <p className="py-4  rounded-sm ml-20"> <a href="/"  >Orders & Cart</a> </p> 
            <p className="py-4  rounded-sm ml-20"> <a href="/"  >Change Password</a></p>
            <p className="py-4  rounded-sm ml-20"> <a href="/"  >Logout</a></p> 
            
             
        </div>
    )
}

export default SectionList;