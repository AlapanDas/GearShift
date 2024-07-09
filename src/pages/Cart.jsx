import React from 'react'
import Item from '../components/CartItemCard'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Cart = () => {
  const {wishList} = useSelector((state)=>state.user)
  let totalPrice = 0
  return (
    <div className='h-auto p-4 px-6 dark:bg-primary dark:text-white'>
      
        <div className='font-semibold flex gap-2 items-center'>
          <Link to="/"><i className="fa-solid fa-chevron-left"></i></Link>
          <span className='text-xl'>Continue Shopping</span>
        </div>
        <hr className='text-[#797979] mt-3' />
        <div className='flex flex-row items-center justify-between'>
        <p className='mt-6 font-semibold'>Shopping Cart</p>
        <Link to='/payment'><button className='mt-6 rounded-xl text-notif border backdrop-blur-sm px-4 py-2 text-lg font-bold max-md:scale-75'>BUY ALL</button></Link>
        </div>
        <p className='text-sm'>You have <span>3</span> items in your cart</p>
        
        <div id="item-container" className='mt-12 flex flex-col items-start justify-items-center max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1'>
          {
            wishList.map((item)=>{
               totalPrice = totalPrice + Number(item.price)

              return <Item data={item} />
            })
          }          
          {/* <Item/> */}
        </div>
        <p className='font-semibold text-lg dark:text-white'> Total Price : ${totalPrice}</p>
    </div>
  )
}

export default Cart
