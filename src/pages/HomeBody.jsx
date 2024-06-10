import React, { useState } from 'react'
import carImg from '../assets/images/home-car.png';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomeBody = () => {

  const [Data, setData] = useState({
    brand: "",
    budget: "",
    model: "",
    color: ""
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
    if (Data.brand === "" && Data.budget === "" && Data.color === "" && Data.model === "") {
      alert("Please choose at least one filter criteria");
    } else {
      fetch('https://gearshift-backend.onrender.com/car/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
        credentials: 'include',
      }).then((response) => {
        response.json()
      }).then((data) => {
        console.log(data)
      }).catch((error) => {
        console.log(error)
      })
    }
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
                  <option value='{"min":2000,"max":10000}'>2000-10000</option>
                  <option value='{"min":10001,"max":20000}'>10001-20000</option>
                  <option value='{"min":20001,"max":30000}'>20001-30000</option>
                  <option value='{"min":30001,"max":40000}'>30001-40000</option>
                </select>
              </div>
              <div className='flex flex-col py-3 px-32 border-b-2 sm:border-r-2 lg:px-10 sm:border-b-0 sm:px-10 border-notif'>
                <label htmlFor="selection-for-color" className='text-center text-xl font-bold text-notif'>Color</label>
                <select name="color" id="color" className='dark:bg-primary dark:text-white' onChange={dataChange}>
                  <option value=''>Select</option>
                  <option value="black">Black</option>
                  <option value="silver">Silver</option>
                  <option value="blue">Blue</option>
                  <option value="red">Red</option>
                  <option value="gray">Gray</option>
                  <option value="orange">Orange</option>
                  <option value="white">White</option>
                  <option value="charcoal">Charcoal</option>
                </select>
              </div>
              <div className='flex flex-col py-3 px-32 border-b-2 sm:border-b-0 sm:border-r-2 lg:px-10 sm:px-10 border-notif'>
                <label htmlFor="selection-for-brand" className='text-center text-xl font-bold text-notif'>Brand</label>
                <select name="brand" id="brand" className='dark:bg-primary dark:text-white' onChange={dataChange}>
                  <option value=''>Select</option>
                  <option value="toyota">Toyota</option>
                  <option value="ford">Ford</option>
                  <option value="dodge">Dodge</option>
                  <option value="chevrolet">Chevrolet</option>
                  <option value="gmc">GMC</option>
                  <option value="chrysler">Chrysler</option>
                  <option value="kia">KIA</option>
                  <option value="buick">Buick</option>
                  <option value="infiniti">Infiniti</option>
                  <option value="mercedes-benz">Mercedes-benz</option>
                  <option value="jeep">Jeep</option>
                </select>
              </div>
              <div className='flex flex-col py-3 px-32 lg:px-10 sm:px-10 border-notif'>
                <label htmlFor="selection-for-model" className='text-center text-xl font-bold text-notif'>Model</label>
                <select name="model" id="model" className='dark:bg-primary dark:text-white' onChange={dataChange}>
                  <option value=''>Select</option>
                  <option value="cruiser">Cruiser</option>
                  <option value="se">SE</option>
                  <option value="mpv">MPV</option>
                  <option value="door">Door</option>
                  <option value="1500">1500</option>
                  <option value="pk">PK</option>
                  <option value="malibu">Malibu</option>
                  <option value="coupe">Coupe</option>
                  <option value="wagon">Wagon</option>
                  <option value="forte">Forte</option>
                  <option value="encore">Encore</option>
                  <option value="sorento">Sorento</option>
                  <option value="doors">Doors</option>
                  <option value="q70">Q70</option>
                  <option value="vans">Vans</option>
                  <option value="srw">SRW</option>
                  <option value="compass">Compass</option>
                  <option value="enclave">Enclave</option>
                  <option value="cherokee">Cherokee</option>
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
