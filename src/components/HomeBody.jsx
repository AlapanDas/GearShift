import React from 'react'
import carImg from '../assets/images/home-car.png'

const HomeBody = () => {
  return (
    <>
    <div className=' h-auto flex flex-col-reverse sm:flex-row items-stretch justify-between dark:bg-primary transition ease-in-out duration-150'>
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

    </>
  )
}

export default HomeBody
