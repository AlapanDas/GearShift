import React from 'react'
import MasterCard from '../assets/images/master-card.png'
import Visa from '../assets/images/visa.png'
import Rupay from '../assets/images/rupay.png'
import Paytm from '../assets/images/paytm.png'
import { Link } from 'react-router-dom'

const payment = () => {
  return (
    <div className='dark:bg-primary dark:text-white p-4'>
      <div className='font-semibold flex gap-2 items-center'>
        <Link to="/cart"><i className="fa-solid fa-chevron-left"></i></Link>
        <span className='text-xl'>Return To Cart</span>
      </div>
      <div className='py-8 flex items-center justify-center dark:bg-primary dark:text-white'>
      
      <div id='card-section' className='bg-[#735ce8] w-[350px] p-4 text-white rounded-2xl shadow-custom z-30'>
        <p className='mt-3 text-xl font-medium'>Card Details</p>
        <p className='mt-4'>Card Type</p>
        <div id="card-type" className='flex flex-row items-center justify-between mt-3'>
          <div id='card-type' className='h-[60px] w-[20%] bg-[#c9c9c971] flex items-center justify-center rounded-md'><img className='w-[90%] h-[50px]' src={MasterCard} alt="" /></div>
          <div id='card-type' className='h-[60px] w-[20%] bg-[#c9c9c971] flex items-center justify-center rounded-md'><img className='w-[90%] h-[50px]' src={Visa} alt="" /></div>
          <div id='card-type' className='h-[60px] w-[20%] bg-[#c9c9c971] flex items-center justify-center rounded-md'><img className='w-[90%] h-[50px] mb-3' src={Rupay} alt="" /></div>
          <div id='card-type' className='h-[60px] w-[20%] bg-[#c9c9c971] flex items-center justify-center rounded-md'><img className='w-[90%] h-[20px]' src={Paytm} alt="" /></div>
        </div>
        <form className='flex flex-col'>
          <label htmlFor="Name" className='mt-3'>Name on Card</label>
          <input type="text" className=' text-sm h-8 bg-[#c9c9c971] focus:outline-none p-3 rounded-md' />
          <label htmlFor="Name" className='mt-3'>Card number</label>
          <input type="number" className='text-sm h-8 bg-[#c9c9c971] focus:outline-none p-3 rounded-md' />
          <div className='flex flex-row mt-3 gap-2'>
            <div className='w-[48%]'>
              <label htmlFor="Name" className=''>Expiration Date</label>
              <input type="date" className='text-sm h-8 bg-[#c9c9c971] focus:outline-none rounded-md p-3 max-w-[90%]' />
            </div>

            <div className='flex flex-col w-[48%]'>
              <label htmlFor="Name" className=''>CVV</label>
              <input type="number" className='text-sm h-8 bg-[#c9c9c971] focus:outline-none rounded-md p-3 max-w-[90%]' />
            </div>
          </div>
          <div className='mt-8 flex items-center justify-between'>
            <span>Subtotal</span>
            <span>$1688</span>
          </div>
          <div className='flex items-center justify-between mt-3'>
            <span>Shipping</span>
            <span>$4</span>
          </div>
          <div className='flex items-center justify-between mt-3'>
            <span>Totak(Tax incl.)</span>
            <span>$1672</span>
          </div>

          <button type='submit' className='flex justify-between hover:bg-[#59aba0] bg-btncol mb-6 py-3 mt-8 rounded-lg px-6 font-semibold'>
            <span>$1672</span>
            <div className='flex gap-2 items-center'>
              <span>Checkout</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </button>
        </form>

      </div>
    </div>
    </div>
    
  )
}

export default payment
