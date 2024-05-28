import React from 'react'
import carImg from '../assets/images/home-car.png';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomeBody = () => {
  return (
    <>
    <div className='flex flex-col dark:bg-primary'>
      <div className=' h-auto flex flex-col-reverse sm:flex-row items-stretch justify-between transition ease-in-out duration-150'>
        <div className=' w-full sm:w-[45%] flex items-center flex-col gap-6 h-auto'>
          <div className=' h-[30%] w-[60%] mt-[13%] flex items-center justify-center'>
            <h1 className='text-5xl font-bold dark:text-white transition ease-in-out duration-150'>Discover Your <span className='text-notif h-auto'>Dream</span> Car</h1>
          </div>
          <div className='p-2 mr-[160px]'>
            <button className='bg-notif text-white p-2.5 font-semibold rounded-md shadow-xl sm:shadow-xl active:scale-95 hover:opacity-[90%] ml-5'>
              Explore Now
            </button>
          </div>
        </div>
        <div className=' w-full sm:w-[50%]'>
          <img src={carImg} alt="car" />
        </div>
      </div>
      <div id='Search-filter' className=' m-auto mt-4 mb-8'>
        <form className='flex flex-col lg:flex-row justify-center'>
          <div className='flex flex-col sm:flex-row border-2 border-notif lg:px-1 rounded-md'>
            <div className='flex flex-col py-3 px-32 border-b-2 sm:border-r-2 sm:px-10 sm:border-b-0 border-notif'>
              <label htmlFor="selection-for-budget" className='text-center text-xl font-bold text-notif'>Budget</label>
              <select name="budget" id="budget" className='dark:bg-primary dark:text-white'>
                <option>Select</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
            <div className='flex flex-col py-3 px-32 border-b-2 sm:border-r-2 lg:px-10 sm:border-b-0 sm:px-10 border-notif'>
              <label htmlFor="selection-for-vehicle" className='text-center text-xl font-bold text-notif'>Vehicle</label>
              <select name="vehicle" id="vehicle" className='dark:bg-primary dark:text-white'>
                <option>Select</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
            <div className='flex flex-col py-3 px-32 border-b-2 sm:border-b-0 sm:border-r-2 lg:px-10 sm:px-10 border-notif'>
              <label htmlFor="selection-for" className='text-center text-xl font-bold text-notif'>Brand</label>
              <select name="brand" id="brand" className='dark:bg-primary dark:text-white'>
                <option>Select</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
            <div className='flex flex-col py-3 px-32 lg:px-10 sm:px-10 border-notif'>
              <label htmlFor="selection-for" className='text-center text-xl font-bold text-notif'>Model</label>
              <select name="model" id="model" className='dark:bg-primary dark:text-white'>
                <option>Select</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
          </div>
          <button type='submit' className='bg-notif h-10 w-28 text-center text-white font-bold px-4 py-2 rounded-md my-5 mx-auto lg:my-auto lg:ml-8 hover:shadow-sm  hover:scale-105'><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff" }}></FontAwesomeIcon><span> Search</span></button>
        </form>
      </div>
    </div>
    </>
  )
}

export default HomeBody
