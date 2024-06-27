import React, { useState } from 'react'
import carImg from '../assets/images/home-car.png';
import FilterEngine from '../components/FilterEngine';
import { useNavigate } from 'react-router-dom';
import CarSlider from "../components/CarSlider";

const HomeBody = () => {
  const navigate=useNavigate();
  const [searchResult, setResult] = useState([])
  const ClickAtFilter = (data) => {
    setResult(data)
    navigate('/result',{state:data})
  }
  return (
    <>
      <CarSlider/>
      
      <div className='flex flex-col dark:bg-primary'>
        <div className='h-auto flex flex-col sm:flex-row items-stretch justify-between transition ease-in-out duration-150'>
          <div className=' w-auto mt-10 mr-5 sm:w-[50%]'>
            <img src={carImg} alt="car" />
          </div>
          <div className=' mt-10 ml-[15%] sm:w-[45%] flex flex-left flex-col sm:flex-col h-auto w-auto'>
            <div className=' h-[30%] w-[60%] mt-[13%] flex items-center justify-center'>
              <h1 className='text-5xl font-bold dark:text-white transition ease-in-out duration-150'>Discover Your <span className='text-notif h-auto'>Dream</span> Car</h1>
            </div>
            <div className='position-relative mt-10 sm:mt-20 lg:mt-10'>
              <button className='bg-notif mb-10 text-white p-2.5 font-semibold rounded-md shadow-xl sm:shadow-xl active:scale-95 hover:opacity-[90%]'>
                Explore Now
              </button>
            </div>
          </div>

        </div>

        <FilterEngine whenClick={ClickAtFilter} />

      </div>
    </>
  )
}

export default HomeBody;