import React, { useState } from 'react'
import DarkModeToggle from './darkToggler'
import Button from './Button';
import { useSelector } from 'react-redux';

const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Car Service", link: "/" },
    { name: "Contact", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user);
  return (
    <div className='shadow-md dark:shadow-md w-full top-0 left-0'>
      <div className='lg:flex items-center justify-between bg-white py-4 lg:px-10 px-7 dark:bg-gray transition ease-in-out duration-150'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        text-black dark:text-white transition ease-in-out duration-150'>
          <span className='text-3xl mr-5 pt-2'>
            <i className="fa-solid fa-car-side dark:text-white"></i>
          </span>
          <a href="/">
            GearShift
          </a>
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
          <i className={open ? 'fa-solid fa-x text-md dark:text-white' : 'fa-solid fa-bars dark:text-white'}></i>
        </div>
  
        <ul className={`lg:flex lg:items-center dark:bg-gray lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto left-0 w-full lg:w-auto lg:pl-0 pl-9 transition ease-in-out duration-150 ${open ? 'top-20 ':'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='lg:ml-8 text-xl lg:my-0 my-7 hover:text-notif dark:text-white dark:hover:text-onprimary'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
          {user.isloggedIn ?
            <Button>
              <a href="/login">
                Account
              </a>
            </Button>
            :
            <Button>
              <a href="/login">
                Sign Up / Login
              </a>
            </Button>
          }

          <DarkModeToggle />
        </ul>
      </div>
    </div>

  )
}

export default Header
