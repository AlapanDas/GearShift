import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className=' bg-darkbg dark:bg-btncol dark:text-black font-semibold active:scale-90 shadow-md hover:opacity-[90%] text-white py-2 px-6 rounded lg:ml-8 lg:mt-4  
    duration-500 mb-5 mt-2'>
      {props.children}
    </button>
    </div>
  )
}

export default Button
