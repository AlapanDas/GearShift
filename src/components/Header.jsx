import React, { useState } from 'react'
import DarkModeToggle from './darkToggler'
import Button from './Button';
const Header = () => {
    let Links =[
        {name:"Home",link:"/"},
        {name:"About",link:"/"},
        {name:"Car Service",link:"/"},
        {name:"Contact",link:"/"},
      ];
      let [open,setOpen]=useState(false);
  return (
      <div className='shadow-md dark:shadow-md w-full top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 dark:bg-gray transition ease-in-out duration-150'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        text-black dark:text-white transition ease-in-out duration-150'>
          <span className='text-3xl text-indigo-600 mr-5 pt-2'>
          <i className="fa-solid fa-car-side dark:text-white"></i>
          </span>
          GearShift
        </div>
        
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <i className={open? 'fa-solid fa-x text-md dark:text-white' : 'fa-solid fa-bars dark:text-white'}></i>
        </div>
  
        <ul className={`md:flex md:items-center dark:bg-gray md:pb-0 pb-12 absolute md:static bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition ease-in-out duration-150 ${open ? 'top-20 ':'top-[-490px]'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 hover:text-notif dark:text-white dark:hover:text-onprimary'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
          <Button>
            Sign Up / Login
          </Button>
          <DarkModeToggle/>
        </ul>
        </div>
      </div>

  )
}

export default Header
