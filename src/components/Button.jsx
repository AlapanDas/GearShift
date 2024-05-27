import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='bg-notif hover:opacity-[90%] text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500 mb-5 mt-2'>
      {props.children}
    </button>
    </div>
  )
}

export default Button
