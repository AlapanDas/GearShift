import React from "react";



function SectionList(){
    return (
        <div className="  flex  flex-wrap  gap-y-0.3 place-items-center rounded-lg sm:flex-col sm:justify-normal sm:min-w-80 max-sm:bg-onprimary max-sm:hidden dark:max-sm:bg-primary sm:max-h-80  dark:bg-primary">
            <p className=" sm:py-4 basis-auto  rounded-sm py-0.5 px-2 sm:ml-20  max-sm:text-xs dark:text-secondary"> <a href="/"  >User Information</a></p> 
            <p className=" sm:py-4 basis-auto rounded-sm py-0.5 px-2 sm:ml-20 max-sm:text-xs  dark:text-secondary"> <a href="/"  >Address</a></p> 
            <p className=" sm:py-4 basis-auto rounded-sm py-0.5 px-2 sm:ml-20 max-sm:text-xs dark:text-secondary"> <a href="/"  >Orders & Cart</a> </p> 
            <p className=" sm:py-4 basis-auto rounded-sm py-0.5 px-2 sm:ml-20 max-sm:text-xs dark:text-secondary"> <a href="/"  >Change Password</a></p>
            <p className=" sm:py-4 basis-auto rounded-sm py-0.5 px-2 sm:ml-20 max-sm:text-xs  dark:text-secondary"> <a href="/"  >Logout</a></p> 
            
             
        </div>
    )
}

export default SectionList;