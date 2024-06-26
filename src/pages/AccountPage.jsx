import React from 'react'
import SectionData from './Account/SectionData'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'
import LoginSignup from './LoginSignup';


export default function AccountPage() {
  const user = useSelector((state) => state.user);
  if (!Cookies.get('user_data'))
    window.location.href="/"
    return (
      <>{Cookies.get('user_data') || user.username ?
        <SectionData /> :
        <div>
        </div>
      }

      </>
    )
}
