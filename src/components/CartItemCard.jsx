import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const CartItemCard = ({data}) => {
  const [count , setCount] = useState(1)

  const increament = () =>{
    setCount(count+1)
  }

  const decreament = () =>{
    count>1 ? setCount(count - 1) : setCount(1)
  }

  return (
      <div className='shadow-lg dark:shadow-md dark:shadow-[#74747437] max-md:dark:shadow-custom border-[1px] border-[#d9d9d9] dark:border-none mb-8 w-[43.75rem] max-md:w-[15rem] px-6 py-3 rounded-lg flex flex-row items-center gap-3 max-md:gap-8 max-md:flex max-md:flex-col '>
        <div className='bg-[#c9c9c971] max-md:mt-2 rounded-lg max-md:w-full max-md:h-[120px] h-[70px] w-[70px] flex items-center justify-center'><img src={data.image} alt="image" className='rounded-lg'/></div>
        <div className='flex max-md:flex-col max-md:gap-6 items-center justify-between w-[70%]'>
          <div id="desc" className=' w-[180px]'>
            <p className='text-lg font-medium max-md:mb-4'>Model: {data.model}</p>
            <p className='flex justify-between'><span>Brand: {data.brand}</span><span>Color: {data.color}</span></p>
          </div>
          <div className='flex items-center justify-between w-40'>
          <p className='font-semibold text-xl'>${data.price}</p>
          <div id="quantity" className='flex flex-row items-center gap-2'>
            <span className='text-xl font-bold'>{count}</span>
            <div className='flex flex-col'>
              <i className="fa-solid fa-chevron-up" onClick={increament}></i>
              <i className="fa-solid fa-chevron-down" onClick={decreament}></i>
            </div>
          </div>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center gap-6 w-32 max-md:mb-6'>
        <Link to='/payment'><button className='rounded-xl text-notif border backdrop-blur-sm  px-4 py-2 text-lg font-bold max-md:scale-75'>BUY</button></Link>
        <i className="fa-solid fa-trash-can text-xl text-alert max-md:scale-75"></i>
        </div>
      </div>
  )
}

export default CartItemCard
