import React from "react";



function SectionList(){
    return (
        <div className="  flex flex-col min-w-80 dark:bg-primary">
            <p className="py-4  rounded-sm ml-20 dark:text-secondary"> <a href="/"  >User Information</a></p> 
            <p className="py-4  rounded-sm ml-20 dark:text-secondary"> <a href="/"  >Address</a></p> 
            <p className="py-4  rounded-sm ml-20 dark:text-secondary"> <a href="/"  >Orders & Cart</a> </p> 
            <p className="py-4  rounded-sm ml-20 dark:text-secondary"> <a href="/"  >Change Password</a></p>
            <p className="py-4  rounded-sm ml-20 dark:text-secondary"> <a href="/"  >Logout</a></p> 
            
             
        </div>
    )
}

export default SectionList;