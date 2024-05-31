import React, { useState } from 'react'
import carImg from '../assets/images/home-car.png';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomeBody = () => {

  const [Data, setData] = useState({
    brand: "",
    budget: "",
    model: "",
    vehicle: ""
  });

  let dataChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let new_val;
    if (name === "budget") {
      if (value === '') {
        new_val = value;
      } else {
        new_val = JSON.parse(value);
      }
    } else {
      new_val = value;
    }
    setData({ ...Data, [name]: new_val });
  };

  let collection_data = (e) => {
    e.preventDefault();
    console.log(Data);
  }

  return (
    <>
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
        <div id='Search-filter' className=' m-auto mt-4 mb-8'>
          <form className='flex flex-col lg:flex-row justify-center' onSubmit={collection_data}>
            <div className='flex flex-col sm:flex-row border-2 border-notif lg:px-1 rounded-md'>
              <div className='flex flex-col py-3 px-32 border-b-2 sm:border-r-2 sm:px-10 sm:border-b-0 border-notif'>
                <label htmlFor="selection-for-budget" className='text-center text-xl font-bold text-notif'>Budget</label>
                <select name="budget" id="budget" className='dark:bg-primary dark:text-white' onChange={dataChange}>
                  <option value=''>Select</option>
                  <option value='{"min":100000,"max":200000}'>100000-200000</option>
                  <option value='{"min":200000,"max":300000}'>200000-300000</option>
                  <option value='{"min":300000,"max":400000}'>300000-400000</option>
                </select>
              </div>
              <div className='flex flex-col py-3 px-32 border-b-2 sm:border-r-2 lg:px-10 sm:border-b-0 sm:px-10 border-notif'>
                <label htmlFor="selection-for-vehicle" className='text-center text-xl font-bold text-notif'>Vehicle</label>
                <select name="vehicle" id="vehicle" className='dark:bg-primary dark:text-white' onChange={dataChange}>
                  <option value=''>Select</option>
                  <option value="Car">Car</option>
                  <option value="Bike">Bike</option>
                  <option value="Truck">Truck</option>
                </select>
              </div>
              <div className='flex flex-col py-3 px-32 border-b-2 sm:border-b-0 sm:border-r-2 lg:px-10 sm:px-10 border-notif'>
                <label htmlFor="selection-for" className='text-center text-xl font-bold text-notif'>Brand</label>
                <select name="brand" id="brand" className='dark:bg-primary dark:text-white' onChange={dataChange}>
                  <option value=''>Select</option>
                  <option value="Audi">Audi</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Marsades">Marsades</option>
                </select>
              </div>
              <div className='flex flex-col py-3 px-32 lg:px-10 sm:px-10 border-notif'>
                <label htmlFor="selection-for" className='text-center text-xl font-bold text-notif'>Model</label>
                <select name="model" id="model" className='dark:bg-primary dark:text-white' onChange={dataChange}>
                  <option value=''>Select</option>
                  <option value="Discover">Discover</option>
                  <option value="Neon">Neon</option>
                  <option value="Glacier">Glacier</option>
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
