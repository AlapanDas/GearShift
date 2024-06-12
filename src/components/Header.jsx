import React, { useState, useEffect } from 'react'
import DarkModeToggle from './darkToggler'
import Button from './Button';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { setAddress, setCity, setEmail, setFullname, setLogin, setNumber, setOrders, setPincode, setState, setUsername } from '../user/userconfig'



const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Car Service", link: "/" },
    { name: "Contact", link: "/" },
  ];
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  let [open, setOpen] = useState(false);
  const [setlogin, updatelogin] = useState(false)
  var userObject;
  function setUser(user_data) {
    dispatch(setLogin(true));
    dispatch(setUsername(user_data.username));
    dispatch(setFullname(user_data.fullname));
    dispatch(setAddress(user_data.address));
    dispatch(setCity(user_data.city));
    dispatch(setEmail(user_data.email));
    dispatch(setNumber(user_data.number));
    dispatch(setOrders(user_data.orders));
    dispatch(setPincode(user_data.pincode));
    dispatch(setState(user_data.state));
  }


  useEffect(() => {
    const userCookie = Cookies.get('user_data');
    // Searches for Cookie(jwt)
    if (userCookie) {
       userObject = JSON.parse(userCookie);
      const arrayToken = userObject.split('.');
      const tokenPayload = JSON.parse(atob(arrayToken[1]))
      console.log(tokenPayload);
      setUser(tokenPayload);
      updatelogin(true);
    } else {
      // Cookie not Found then searches for Redux Info
      if (user.isLoggedIn)
        updatelogin(true)
      else
        //Cookie, Redux not found 
        updatelogin(false);
    }
  }, []);

  return (
    <div className='shadow-md dark:shadow-md w-full top-0 left-0 sticky z-50'>
      <div className='h-[75px] lg:flex items-center justify-between py-4 lg:px-10 px-7 dark:backdrop-blur-sm transition ease-in-out duration-150 dark:bg-gray  backdrop-blur-lg'>
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
  
        <ul className={`max-lg:bg-[#bebebe9a] backdrop-blur-lg lg:flex  lg:items-center max-lg:shadow-lg lg:pb-0 pb-12 absolute lg:static lg:z-50 left-0 w-full lg:w-auto lg:pl-0 pl-9 transition ease-in-out duration-150 z-50 dark:bg-gray dark:max-lg:bg-[#656464c4] ${open ? 'top-18':'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='lg:ml-8 text-xl lg:my-0 my-7 hover:text-notif dark:text-white dark:hover:text-onprimary'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
          {setlogin ?
            <a href="/accounts">
              <Button>
                {user.fullname || userObject.username}
              </Button>
            </a>
            :
            <a href="/login">
              <Button>
                Sign Up / Login
              </Button>
            </a>
          }

          <DarkModeToggle />
        </ul>
      </div>
    </div>

  )
}

export default Header
