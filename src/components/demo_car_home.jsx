import React from 'react'
import Card from './Cards'
import all_data from '../assets/car-data.json'
import { Link } from 'react-router-dom'


const demo_car_home = (props) => {
    console.log(all_data.cars[0])
    return (
        <div className='pt-24'>
            <h1 className='text-center font-sans font-semibold text-6xl pb-16 dark:text-white'>
                Start Your Journey
            </h1>
            <div className='mx-auto grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6 p-4 justify-items-center'>
                {
                    all_data.cars
                        .filter(item => props.category === item.category)
                        .map((item) => {
                            console.log(item)
                            return <Card Data={item} />
                        })


                }
            </div>
            <div className='flex items-center justify-center pt-10 pb-10'>
                <Link to="/result"><button className='border-onprimary border-2 text-[#15868a] dark:text-white active:scale-95 hover:scale-105 p-2 px-4 rounded-full'> Explore more</button></Link>
            </div>
        </div>
    )
}

export default demo_car_home
